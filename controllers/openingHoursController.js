import { data } from '../data/data.js';
import { constructResObj } from '../utils/constructResObj.js';

// This is for get request like "/api/opening-hours"

export const openingHoursController = (req, res) => {
	let filteredData = data.openingHours;
	res.json(
		constructResObj(
			200,
			'Request for openingHours successful',
			true,
			filteredData
		)
	);
};
