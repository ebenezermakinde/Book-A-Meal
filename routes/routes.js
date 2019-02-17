import { Router } from 'express';

import MealController from '../controllers/mealcontroller';
import validateCreateMeal from '../middleware/validators/meals.validate';

const router = Router();

router.get('/api/v1/meals', MealController.getAllMeals);
router.post('/api/v1/meals', validateCreateMeal, MealController.createAMeal);

export default router;
