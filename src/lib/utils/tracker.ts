/**
 * Time-tracker domain logic — pure & framework-agnostic so it is fully unit-testable.
 *
 * Day boundaries are measured in **Eastern Time** (`America/New_York`), which
 * transparently handles the EST <-> EDT daylight-saving switch. The active day
 * is identified by its Eastern calendar date (YYYY-MM-DD), independent of the
 * visitor's local timezone.
 */

export const TRACKER_PASSWORD = 'luvyabab3';
export const EST_TIMEZONE = 'America/New_York';

export const STORAGE_KEY_STATE = 'chloesquill.tracker.state';
export const STORAGE_KEY_HISTORY = 'chloesquill.tracker.history';
export const SESSION_KEY_AUTH = 'chloesquill.tracker.auth';

/** Live, mutable state for the currently-active day. */
export interface TrackerState {
	/** Eastern date string (YYYY-MM-DD) the active day belongs to. */
	currentDate: string;
	/** Seconds already banked for the active day (before the running stretch). */
	accumulatedSeconds: number;
	/** Epoch-ms when the current running stretch started, or `null` when stopped. */
	startedAt: number | null;
}

/** Historic totals: Eastern date string (YYYY-MM-DD) -> total seconds tracked. */
export type TrackerHistory = Record<string, number>;

export interface ESTParts {
	year: number;
	month: number; // 1-12
	day: number; // 1-31
	hours: number; // 0-23
	minutes: number; // 0-59
	seconds: number; // 0-59
	weekday: number; // 0 = Sunday
}

export type IntensityLevel = 0 | 1 | 2 | 3 | 4;

const estPartsFormatter = new Intl.DateTimeFormat('en-US', {
	timeZone: EST_TIMEZONE,
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hourCycle: 'h23',
	weekday: 'short'
});

const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAY_ABBR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/** Returns the Eastern-Time calendar parts for the given instant. */
export function getESTParts(date: Date = new Date()): ESTParts {
	const map: Record<string, string> = {};
	for (const { type, value } of estPartsFormatter.formatToParts(date)) map[type] = value;
	const wd = map.weekday as string;
	let hours = Number(map.hour);
	if (hours === 24) hours = 0; // guard against the rare h23 "24:00" edge case
	return {
		year: Number(map.year),
		month: Number(map.month),
		day: Number(map.day),
		hours,
		minutes: Number(map.minute),
		seconds: Number(map.second),
		weekday: WEEKDAY_ABBR.indexOf(wd)
	};
}

/** Returns the Eastern-Time date string (YYYY-MM-DD) for the given instant. */
export function getESTDateString(date: Date = new Date()): string {
	const p = getESTParts(date);
	return `${p.year}-${String(p.month).padStart(2, '0')}-${String(p.day).padStart(2, '0')}`;
}

/** Live elapsed seconds for the active day, including the running stretch. Pure. */
export function getLiveSeconds(state: TrackerState, now: number): number {
	let total = state.accumulatedSeconds;
	if (state.startedAt !== null) {
		total += Math.max(0, (now - state.startedAt) / 1000);
	}
	return total;
}

/** Formats whole seconds as `HH:MM:SS` (rolls past 24h). */
export function formatDuration(totalSeconds: number): string {
	const s = Math.max(0, Math.floor(totalSeconds));
	const hours = Math.floor(s / 3600);
	const minutes = Math.floor((s % 3600) / 60);
	const seconds = s % 60;
	const pad = (n: number) => String(n).padStart(2, '0');
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export interface RolloverResult {
	state: TrackerState;
	history: TrackerHistory;
	rolledOver: boolean;
}

/**
 * If the Eastern-Time calendar date has moved past the active day, commit the
 * accumulated time to that day's history record and reset the active counter to
 * zero for the new day. When the timer was running across midnight it keeps
 * running, simply restarting its clock at the rollover instant.
 */
export function applyRollover(
	state: TrackerState,
	history: TrackerHistory,
	now: number
): RolloverResult {
	const today = getESTDateString(new Date(now));
	if (state.currentDate === today) {
		return { state, history, rolledOver: false };
	}

	const committed = getLiveSeconds(state, now);
	const newHistory: TrackerHistory = { ...history };
	if (committed > 0) {
		newHistory[state.currentDate] = (newHistory[state.currentDate] ?? 0) + committed;
	}

	return {
		state: {
			currentDate: today,
			accumulatedSeconds: 0,
			startedAt: state.startedAt !== null ? now : null
		},
		history: newHistory,
		rolledOver: true
	};
}

/** Start (if stopped) or stop+bank (if running) the timer. Pure. */
export function toggleRunning(state: TrackerState, now: number): TrackerState {
	if (state.startedAt === null) {
		return { ...state, startedAt: now };
	}
	const stretch = Math.max(0, (now - state.startedAt) / 1000);
	return {
		...state,
		accumulatedSeconds: state.accumulatedSeconds + stretch,
		startedAt: null
	};
}

/** The largest single-day total in the history (the "peak"). */
export function getPeakSeconds(history: TrackerHistory): number {
	let max = 0;
	for (const v of Object.values(history)) {
		if (v > max) max = v;
	}
	return max;
}

/** 0 = empty; otherwise the day is bucketed 1-4 against the peak. The peak is always level 4. */
export function computeIntensity(seconds: number, max: number): IntensityLevel {
	if (!seconds || seconds <= 0 || max <= 0) return 0;
	const ratio = seconds / max;
	if (ratio <= 0.25) return 1;
	if (ratio <= 0.5) return 2;
	if (ratio <= 0.75) return 3;
	return 4;
}

export interface HeatmapCell {
	date: string; // YYYY-MM-DD (Eastern)
	seconds: number;
	level: IntensityLevel;
	future: boolean; // after today — not yet trackable
}

export interface HeatmapMonthLabel {
	weekIndex: number;
	label: string;
}

export interface HeatmapGrid {
	/** Columns of 7 cells (Sun..Sat), oldest first. */
	weeks: HeatmapCell[][];
	monthLabels: HeatmapMonthLabel[];
	peak: number;
	totalDays: number;
}

interface CalDate {
	y: number;
	m: number; // 1-12
	d: number;
}

function toCal(ms: number): CalDate {
	const dt = new Date(ms);
	return { y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate() };
}

function addDays(base: CalDate, days: number): CalDate {
	// Pure-UTC day arithmetic (multiples of 86400000ms) — no DST pitfalls.
	return toCal(Date.UTC(base.y, base.m - 1, base.d) + days * 86_400_000);
}

function calString(c: CalDate): string {
	return `${c.y}-${String(c.m).padStart(2, '0')}-${String(c.d).padStart(2, '0')}`;
}

/**
 * Builds a GitHub-style grid (columns = weeks Sun→Sat) covering the last
 * `weeks` weeks ending at the current week. Intensity scales so the peak day is
 * the darkest (level 4).
 */
export function buildHeatmap(
	history: TrackerHistory,
	now: number,
	weeks = 53
): HeatmapGrid {
	const peak = getPeakSeconds(history);
	const todayStr = getESTDateString(new Date(now));

	// Eastern-calendar "today" and the Sunday that begins its week.
	const estToday = getESTParts(new Date(now));
	const todayCal: CalDate = { y: estToday.year, m: estToday.month, d: estToday.day };
	const todayWeekday = new Date(Date.UTC(todayCal.y, todayCal.m - 1, todayCal.d, 12)).getUTCDay();
	// Sunday beginning the current week; the grid spans the prior (weeks-1) weeks
	// plus the current week, ending on today — like GitHub's contribution graph.
	const start = addDays(addDays(todayCal, -todayWeekday), -(weeks - 1) * 7);

	const out: HeatmapCell[][] = [];
	const monthLabels: HeatmapMonthLabel[] = [];
	let totalDays = 0;
	let lastLabeledMonth = -1;

	for (let w = 0; w < weeks; w++) {
		const column: HeatmapCell[] = [];
		for (let dow = 0; dow < 7; dow++) {
			const cell = addDays(start, w * 7 + dow);
			const date = calString(cell);
			const seconds = history[date] ?? 0;
			const future = date > todayStr;
			column.push({ date, seconds, level: computeIntensity(seconds, peak), future });
			if (seconds > 0) totalDays++;
		}
		out.push(column);

		const firstMonth = column[0] ? Number(column[0].date.slice(5, 7)) : -1;
		if (firstMonth !== lastLabeledMonth) {
			monthLabels.push({ weekIndex: w, label: MONTH_ABBR[firstMonth - 1] ?? '' });
			lastLabeledMonth = firstMonth;
		}
	}

	return { weeks: out, monthLabels, peak, totalDays };
}

/** Whether the given password unlocks the tracker. */
export function isCorrectPassword(input: string): boolean {
	return input === TRACKER_PASSWORD;
}
