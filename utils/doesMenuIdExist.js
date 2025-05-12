import { data } from '../data/data.js';

export const doesMenuIdExist = (id) => {
	return data.menus.some((menu) => menu.id === id);
};
