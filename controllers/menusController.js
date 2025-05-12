import { data } from '../data/data.js';
import { getMenuFromParams } from '../functions/getMenuFromParams.js';
import { constructResObj } from '../utils/constructResObj.js';

// This is for get request like "/api/menus/:menuID" or "/api/menus"

export const menusController = (req, res) => {
	let filteredData = getMenuFromParams(data, req.params);
	let menuRequested = req.params.menuId ?? 'all menus';
	if (filteredData) {
		res.json(
			constructResObj(
				200,
				`Request for ${menuRequested} successful`,
				true,
				filteredData
			)
		);
	} else {
		res.status(400);
		res.json(
			constructResObj(
				400,
				`No menus found with id '${req.params.menuId}`,
				false
			)
		);
	}
};
