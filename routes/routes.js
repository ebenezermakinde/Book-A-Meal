import { Router } from 'express';
import MealController from '../controllers/mealcontroller';

const routes = Router();

routes.get('/api/v1/meals', MealController.fetchAllMeals);

export default routes;
