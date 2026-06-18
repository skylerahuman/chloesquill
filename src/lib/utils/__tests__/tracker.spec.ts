import { describe, expect, it } from 'vitest';
import {
	applyRollover,
	buildHeatmap,
	computeIntensity,
	formatDuration,
	getESTDateString,
	getESTParts,
	getLiveSeconds,
	getPeakSeconds,
	isCorrectPassword,
	toggleRunning,
	type TrackerHistory,
	type TrackerState
} from '../tracker';

describe('getESTDateString / getESTParts', () => {
	it('returns YYYY-MM-DD for a known UTC instant in Eastern Time', () => {
		// 2026-01-15T13:00:00Z is 08:00 EST (UTC-5, standard time, no DST).
		const d = new Date('2026-01-15T13:00:00Z');
		expect(getESTDateString(d)).toBe('2026-01-15');
	});

	it('rolls the calendar date back across the midnight boundary', () => {
		// 2026-01-16T04:00:00Z is 2026-01-15 23:00 EST -> still the 15th.
		const d1 = new Date('2026-01-16T04:00:00Z');
		expect(getESTDateString(d1)).toBe('2026-01-15');
		// 2026-01-16T05:00:00Z is 2026-01-16 00:00 EST -> the 16th.
		const d2 = new Date('2026-01-16T05:00:00Z');
		expect(getESTDateString(d2)).toBe('2026-01-16');
	});

	it('respects EDT (UTC-4) during summer', () => {
		// 2026-07-04T04:30:00Z is 00:30 EDT on the 4th.
		expect(getESTDateString(new Date('2026-07-04T04:30:00Z'))).toBe('2026-07-04');
		// 2026-07-04T03:30:00Z is 2026-07-03 23:30 EDT -> the 3rd.
		expect(getESTDateString(new Date('2026-07-04T03:30:00Z'))).toBe('2026-07-03');
	});

	it('parses parts including weekday', () => {
		// 2026-01-15 is a Thursday. 13:00 UTC = 08:00 EST.
		const p = getESTParts(new Date('2026-01-15T13:00:00Z'));
		expect(p).toMatchObject({ year: 2026, month: 1, day: 15, hours: 8, weekday: 4 });
	});
});

describe('getLiveSeconds', () => {
	it('returns only accumulated time when stopped', () => {
		const state: TrackerState = { currentDate: '2026-01-01', accumulatedSeconds: 3600, startedAt: null };
		expect(getLiveSeconds(state, 9_000_000)).toBe(3600);
	});

	it('adds elapsed running time on top of accumulated', () => {
		const startedAt = 1_000_000;
		const state: TrackerState = { currentDate: '2026-01-01', accumulatedSeconds: 600, startedAt };
		// 100s elapsed
		expect(getLiveSeconds(state, startedAt + 100_000)).toBe(700);
	});

	it('never goes negative if now precedes startedAt', () => {
		const state: TrackerState = { currentDate: '2026-01-01', accumulatedSeconds: 10, startedAt: 1_000_000 };
		expect(getLiveSeconds(state, 999_000)).toBe(10);
	});
});

describe('formatDuration', () => {
	it('formats seconds as HH:MM:SS', () => {
		expect(formatDuration(0)).toBe('00:00:00');
		expect(formatDuration(65)).toBe('00:01:05');
		expect(formatDuration(3661)).toBe('01:01:01');
	});

	it('rolls past 24 hours', () => {
		expect(formatDuration(90_061)).toBe('25:01:01');
	});

	it('clamps negatives', () => {
		expect(formatDuration(-50)).toBe('00:00:00');
	});
});

describe('toggleRunning', () => {
	it('starts when stopped', () => {
		const state: TrackerState = { currentDate: '2026-01-01', accumulatedSeconds: 0, startedAt: null };
		const next = toggleRunning(state, 5_000);
		expect(next.startedAt).toBe(5_000);
		expect(next.accumulatedSeconds).toBe(0);
	});

	it('stops and banks the running stretch', () => {
		const state: TrackerState = { currentDate: '2026-01-01', accumulatedSeconds: 100, startedAt: 2_000 };
		const next = toggleRunning(state, 6_000); // 4s stretch
		expect(next.startedAt).toBeNull();
		expect(next.accumulatedSeconds).toBe(104);
	});

	it('does not mutate the original state', () => {
		const state: TrackerState = { currentDate: '2026-01-01', accumulatedSeconds: 1, startedAt: null };
		toggleRunning(state, 5);
		expect(state.startedAt).toBeNull();
		expect(state.accumulatedSeconds).toBe(1);
	});
});

describe('applyRollover', () => {
	it('is a no-op when still on the same Eastern day', () => {
		const state: TrackerState = { currentDate: '2026-01-15', accumulatedSeconds: 50, startedAt: null };
		const history: TrackerHistory = { '2026-01-14': 100 };
		// 2026-01-15T13:00Z = 08:00 EST on the 15th
		const res = applyRollover(state, history, new Date('2026-01-15T13:00:00Z').getTime());
		expect(res.rolledOver).toBe(false);
		expect(res.state).toBe(state);
		expect(res.history).toBe(history);
	});

	it('commits accumulated time to the old day and resets to zero at midnight EST', () => {
		// Active day was the 15th, stopped with 1h banked.
		const state: TrackerState = { currentDate: '2026-01-15', accumulatedSeconds: 3600, startedAt: null };
		const history: TrackerHistory = {};
		// 2026-01-16T05:00Z = exactly 00:00 EST on the 16th -> new day.
		const res = applyRollover(state, history, new Date('2026-01-16T05:00:00Z').getTime());
		expect(res.rolledOver).toBe(true);
		expect(res.state.currentDate).toBe('2026-01-16');
		expect(res.state.accumulatedSeconds).toBe(0);
		expect(res.state.startedAt).toBeNull();
		expect(res.history['2026-01-15']).toBe(3600);
	});

	it('commits the running stretch into the old day and keeps running into the new day', () => {
		// Running across midnight: started at 04:59:00 EST on the 15th, rolls at 00:00:30 on 16th.
		// 2026-01-16T04:59:00Z = 2026-01-15 23:59:00 EST
		const startedAt = new Date('2026-01-16T04:59:00Z').getTime();
		const state: TrackerState = { currentDate: '2026-01-15', accumulatedSeconds: 120, startedAt };
		// 2026-01-16T05:00:30Z = 2026-01-16 00:00:30 EST
		const now = new Date('2026-01-16T05:00:30Z').getTime();
		const res = applyRollover(state, {}, now);
		expect(res.rolledOver).toBe(true);
		// old day = 120 banked + 90s running stretch
		expect(res.history['2026-01-15']).toBe(120 + 90);
		expect(res.state.currentDate).toBe('2026-01-16');
		expect(res.state.accumulatedSeconds).toBe(0);
		expect(res.state.startedAt).toBe(now); // kept running, clock restarted
	});

	it('does not create a history entry when nothing was tracked', () => {
		const state: TrackerState = { currentDate: '2026-01-15', accumulatedSeconds: 0, startedAt: null };
		const res = applyRollover(state, {}, new Date('2026-01-16T05:00:00Z').getTime());
		expect(res.history).toEqual({});
		expect(res.rolledOver).toBe(true);
	});

	it('adds to an existing history entry rather than overwriting', () => {
		const state: TrackerState = { currentDate: '2026-01-15', accumulatedSeconds: 60, startedAt: null };
		const history: TrackerHistory = { '2026-01-15': 3000 };
		const res = applyRollover(state, history, new Date('2026-01-16T05:00:00Z').getTime());
		expect(res.history['2026-01-15']).toBe(3060);
	});
});

describe('computeIntensity / getPeakSeconds', () => {
	it('returns 0 for empty days or zero peak', () => {
		expect(computeIntensity(0, 100)).toBe(0);
		expect(computeIntensity(50, 0)).toBe(0);
	});

	it('scales the peak day to level 4 (darkest)', () => {
		expect(computeIntensity(100, 100)).toBe(4);
	});

	it('buckets ratios into levels 1-4', () => {
		expect(computeIntensity(10, 100)).toBe(1); // 0.10
		expect(computeIntensity(26, 100)).toBe(2); // 0.26 -> 2
		expect(computeIntensity(51, 100)).toBe(3); // 0.51 -> 3
		expect(computeIntensity(76, 100)).toBe(4); // >0.75
	});

	it('getPeakSeconds finds the largest value', () => {
		expect(getPeakSeconds({ a: 1, b: 500, c: 499 })).toBe(500);
		expect(getPeakSeconds({})).toBe(0);
	});
});

describe('buildHeatmap', () => {
	it('produces the requested number of 7-cell weeks', () => {
		// 2026-01-15T13:00Z = Thu Jan 15 2026 EST
		const grid = buildHeatmap({}, new Date('2026-01-15T13:00:00Z').getTime(), 10);
		expect(grid.weeks).toHaveLength(10);
		for (const week of grid.weeks) expect(week).toHaveLength(7);
	});

	it('ends the grid on the current week (last week contains today)', () => {
		const now = new Date('2026-01-15T13:00:00Z').getTime();
		const grid = buildHeatmap({}, now, 8);
		const lastWeekDates = grid.weeks[grid.weeks.length - 1].map((c) => c.date);
		expect(lastWeekDates).toContain('2026-01-15');
	});

	it('starts each column on a Sunday', () => {
		const now = new Date('2026-01-15T13:00:00Z').getTime();
		const grid = buildHeatmap({}, now, 6);
		for (const week of grid.weeks) {
			// weekday of column's first date computed via UTC noon
			const [y, m, d] = week[0].date.split('-').map(Number);
			const weekday = new Date(Date.UTC(y, m - 1, d, 12)).getUTCDay();
			expect(weekday).toBe(0); // Sunday
		}
	});

	it('assigns intensity levels using the peak as level 4', () => {
		const history: TrackerHistory = { '2026-01-10': 10, '2026-01-14': 1000 };
		const now = new Date('2026-01-15T13:00:00Z').getTime();
		const grid = buildHeatmap(history, now, 6);
		expect(grid.peak).toBe(1000);
		const peakCell = grid.weeks.flat().find((c) => c.date === '2026-01-14');
		const lowCell = grid.weeks.flat().find((c) => c.date === '2026-01-10');
		expect(peakCell?.level).toBe(4);
		expect(lowCell?.level).toBe(1);
	});

	it('flags days after today as future', () => {
		const now = new Date('2026-01-15T13:00:00Z').getTime();
		const grid = buildHeatmap({}, now, 6);
		const future = grid.weeks.flat().filter((c) => c.future);
		expect(future.length).toBeGreaterThan(0);
		for (const c of future) expect(c.date > '2026-01-15').toBe(true);
	});

	it('counts total tracked days', () => {
		const history: TrackerHistory = { '2026-01-10': 10, '2026-01-14': 1000, '1999-01-01': 1 };
		const now = new Date('2026-01-15T13:00:00Z').getTime();
		const grid = buildHeatmap(history, now, 53);
		// '1999-01-01' is outside the ~1y window, so only the two Jan-2026 days count.
		expect(grid.totalDays).toBe(2);
	});
});

describe('isCorrectPassword', () => {
	it('accepts the exact password', () => {
		expect(isCorrectPassword('luvyabab3')).toBe(true);
	});

	it('rejects anything else', () => {
		expect(isCorrectPassword('nope')).toBe(false);
		expect(isCorrectPassword('')).toBe(false);
	});
});
