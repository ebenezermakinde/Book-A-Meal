import MealService from '../services/meal.service';

const MealController = {
  // Get all the meals
  getAllMeals(req, res) {
    const allMeals = MealService.getAllMeals();
    return res.status(200).json({
      status: 200,
      data: allMeals,
    });
  },
  createAMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.createMeal(newMeal);

    return res.status(201).json({
      status: 201,
      data: createdMeal,
    });
  },
};
export default MealController;
