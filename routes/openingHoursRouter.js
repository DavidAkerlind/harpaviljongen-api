import express from 'express';
import { openingHoursController } from '../controllers/openingHoursController.js'; //Hanterar opening hours
import { fallbackController } from '../controllers/fallbackController.js';

export const openingHoursRouter = express.Router();

openingHoursRouter.get('/', openingHoursController);

openingHoursRouter.use(fallbackController);
