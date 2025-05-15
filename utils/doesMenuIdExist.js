import { data } from '../data/data.js';

export const doesMenuIdExist = (id) => {
	if (id) {
		return data.menus.find((m) => m.id === id);
	} else return false;
};
