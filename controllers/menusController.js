import { data } from '../data/data.js';
import { getMenuFromParams } from '../functions/getMenuFromParams.js';

// This is for get request like "/api/menus/:menuID" or "/api/menus"

export const menusController = (req, res) => {
	let filteredData = getMenuFromParams(data, req.params);
	res.json(filteredData);
};
