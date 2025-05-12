import { data } from '../data/data.js';
import { getMenuFromParams } from '../functions/getMenuFromParams.js';
import { constructResObj } from '../utils/constructResObj.js';
import { doesMenuIdExist } from '../utils/doesMenuIdExist.js';

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
				`No menus found with id:'${req.params.menuId}`,
				false
			)
		);
	}
};

export const deleteMenu = (req, res) => {
	const { menuId } = req.params;
	if (doesMenuIdExist(menuId)) {
		const filteredData = data.menus.filter((i) => i.id !== menuId);
		data.menus = [];
		data.menus.push(...filteredData);
		res.json(
			constructResObj(
				200,
				`Menu with id:'${menuId}' deleted successfully`,
				true,
				data.menus
			)
		);
	} else {
		res.status(400);
		res.json(
			constructResObj(400, `No menus found with id:${menuId}`, false)
		);
	}
};

export const updateMenu = (req, res) => {
	const { menuId, field } = req.params;
	const { value } = req.body;
	const allowedFields = ['title', 'description', 'type', 'price'];
	if (field === 'items') {
		res.status(400);
		res.json(
			constructResObj(
				400,
				`field not allowed '${field}', allowed fields: '${allowedFields}', if you want to change the items in a menu please use '/api/menus/:menuId/:itemId/:field'`,
				false
			)
		);
	}
	if (allowedFields.includes(field)) {
		const menu = data.menus.find((m) => m.id === menuId);
		if (menu) {
			menu[field] = value;
			res.json(
				constructResObj(
					200,
					`Field:'${field}' in menu:'${menuId}' updated successfully`,
					true,
					menu
				)
			);
		} else {
			res.status(400);
			res.json(
				constructResObj(400, `No menus found with id:${menuId}`, false)
			);
		}
	} else {
		res.status(400);
		res.json(
			constructResObj(
				400,
				`Invalid field:'${field}', allowed fields: '${allowedFields}'`,
				false
			)
		);
	}
};

export const updateMenuItem = (req, res) => {
	const { menuId, itemId, field } = req.params;
	const { value } = req.body;

	const allowedFields = ['title', 'description', 'price'];

	if (allowedFields.includes(field)) {
		const menu = data.menus.find((m) => m.id === menuId);
		if (menu) {
			const item = menu.items.find((i) => i.id === parseInt(itemId));
			if (item) {
				item[field] = value;
				res.json(
					constructResObj(
						200,
						`Field:'${field}' in item:'${itemId}' in menu:'${menuId}' updated successfully`,
						true,
						item
					)
				);
			} else {
				res.status(400);
				res.json(
					constructResObj(
						400,
						`No item found with id:${itemId} in menu:${menuId}`,
						false
					)
				);
			}
		} else {
			res.status(400);
			res.json(
				constructResObj(400, `No menus found with id:${menuId}`, false)
			);
		}
	} else {
		res.status(400);
		res.json(
			constructResObj(
				400,
				`Invalid field:'${field}', allowed fields: '${allowedFields}'`,
				false
			)
		);
	}
};
