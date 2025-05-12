import { data } from '../data/data.js';
import { constructResObj } from '../utils/constructResObj.js';

export const getAllData = (req, res) => {
	if (data) {
		res.json(
			constructResObj(200, 'Request for all data successful', true, data)
		);
	} else {
		res.json(constructResObj(400, 'No data to request', false));
	}
};
