export function tens(num) {
	return num.toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
}

export function timeDiff(pre, post, isHour = false) {
	let diff = (Date.parse(post) - Date.parse(pre)) / 1000;
	let m = Math.floor((diff / 60) % 60);
	let h = isHour ? Math.floor(diff / 3600) : Math.floor(diff / 3600) % 24;
	let d = Math.floor(diff / 86400);

	return isHour ? `${tens(h)}:${tens(m)}` : `${d}:${tens(h)}:${tens(m)}`;
}