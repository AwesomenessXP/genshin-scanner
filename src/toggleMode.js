export function theme () {
	const root = document.documentElement;
	// change the mode in css
	const setTheme = root.className === 'dark'
		? 'light'
		: 'dark';
	root.className = setTheme;
}