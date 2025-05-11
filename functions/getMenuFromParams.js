export const getMenuFromParams = (data, paramsObj) => {
	const { menuId } = paramsObj;

	data = data.menus;

	if (menuId) {
		data = data.filter((menu) => menu.id === menuId);
		if (data.length === 0) {
			return {
				message: `No menus found with id '${menuId}'.`,
				request: paramsObj,
				statusCode: 404,
			};
		}
	}
	return data;
};
