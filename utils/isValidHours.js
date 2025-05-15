import { isValidTimeFormat } from './isValidTimeFormat.js';

export const isValidHours = (hours) => {
	// Both must be empty strings (closed) or both must be valid HH:MM times
	const bothEmpty = hours.from === '' && hours.to === '';
	const bothValidTimes =
		hours.from !== '' &&
		hours.to !== '' &&
		isValidTimeFormat(hours.from) &&
		isValidTimeFormat(hours.to);

	return bothEmpty || bothValidTimes;
};
