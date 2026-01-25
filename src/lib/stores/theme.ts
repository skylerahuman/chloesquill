import { writable } from 'svelte/store';

const createThemeStore = () => {
	const { subscribe, set, update } = writable('light');

	return {
		subscribe,
		toggle: () => {
			update((theme) => {
				const newTheme = theme === 'light' ? 'dark' : 'light';
				if (typeof document !== 'undefined') {
					document.documentElement.classList.remove(theme);
					document.documentElement.classList.add(newTheme);
				}
				return newTheme;
			});
		},
		init: () => {
			if (typeof window !== 'undefined' && window.matchMedia) {
				const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
				set(preferredTheme);
				if (document && document.documentElement) {
					document.documentElement.classList.add(preferredTheme);
				}
			}
		}
	};
};

export const theme = createThemeStore();
