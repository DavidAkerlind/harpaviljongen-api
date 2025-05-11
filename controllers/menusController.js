import { data } from '../data/data.js';
import { getMenuFromMenuParams } from '../functions/getMenuFromMenuParams.js';

// This is for get request like "/api/menus/:menuID" or "/api/menus"

export const menusController = (req, res) => {
	let filteredData = getMenuFromMenuParams(data, req.params);
	res.json(filteredData);
};
