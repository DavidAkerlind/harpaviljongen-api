import { data } from '../data/data.js';

export const getAllData = (req, res) => {
	res.json(data);
};
