import express from 'express';
import {
	openingHoursController,
	updateOpeningHoursByDay,
	updateOpeningHoursAll,
} from '../controllers/openingHoursController.js'; //Hanterar opening hours
import { fallbackController } from '../controllers/fallbackController.js';

export const openingHoursRouter = express.Router();

openingHoursRouter.get('/', openingHoursController);

openingHoursRouter.put('/', updateOpeningHoursAll);

openingHoursRouter.put('/:day', updateOpeningHoursByDay);

openingHoursRouter.use(fallbackController);
