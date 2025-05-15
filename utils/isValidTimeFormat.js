export const isValidTimeFormat = (time) => {
	if (!time) return true; // Allow null/undefined for closed days
	const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
	return timeRegex.test(time);
};
