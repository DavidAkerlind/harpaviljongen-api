export const getMenuFromParams = (data, paramsObj) => {
	const { menuId } = paramsObj;

	data = data.menus;

	if (menuId) {
		data = data.filter((menu) => menu.id === menuId);
	}
	return data;
};
