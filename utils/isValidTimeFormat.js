export const isValidTimeFormat = (time) => {
	if (time === '') return true; // Allow empty string for closed days
	if (time === 'sent') return true; // Allow 'sent' as valid closing time
	const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
	return timeRegex.test(time);
};
