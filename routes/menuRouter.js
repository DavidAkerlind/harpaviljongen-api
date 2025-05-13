import express from 'express';
import {
	deleteMenu,
	menusController,
	updateMenu,
	updateMenuItem,
} from '../controllers/menusController.js'; // Hantera menyer
import { fallbackController } from '../controllers/fallbackController.js';

export const menuRouter = express.Router();

// ==== GET ====
menuRouter.get('/', menusController); // Ex: GET /api/menus för att lista alla menyer
menuRouter.get('/:menuId', menusController); // Ex: GET /api/menus/weekly-lunch för en specifik meny

// ==== DELETE ====
menuRouter.delete('/:menuId', deleteMenu); // Ex: DELETE /api/menus/weekly-wine för att ta bort den menyn helt

// ==== PUT ====
menuRouter.put('/:menuId/:field', updateMenu); // Ex: PUT /api/menus/menu-always/title med en body på { "value": "nyttVärde"}
menuRouter.put('/:menuId/:itemId/:field', updateMenuItem);

// ==== FALLBACK ====
menuRouter.use(fallbackController);
