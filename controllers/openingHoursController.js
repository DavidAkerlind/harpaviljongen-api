import { data } from '../data/data.js';

// This is for get request like "/api/opening-hours"

export const openingHoursController = (req, res) => {
	let filteredData = data.openingHours;
	res.json(filteredData);
};
