import { data } from '../data/data';

export const getAllData = (req, res) => {
	res.json(data);
};
