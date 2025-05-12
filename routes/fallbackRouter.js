import express from 'express';

export const fallbackRouter = express.Router();

fallbackRouter.get('*', (req, res) => {
	res.status(404);
	res.json(
		constructResObj(404, `Route '${req.originalUrl}' not found`, false)
	);
});
