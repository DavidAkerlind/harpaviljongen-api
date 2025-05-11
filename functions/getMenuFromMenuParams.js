export const getMenuFromMenuParams = (data, paramsObj) => {
	const { menuId } = paramsObj;

	data = data.menus;

	console.log(data);
	console.log(menuId);

	if (menuId) {
		data = data.filter((menu) => menu.id === menuId);
	}
	return data;
};
