import meals from '../utils/dummy.meals';

class MealController {
  // Get all the meals
  static fetchAllMeals(req, res) {
    return res.status(200).json({
      status: 200,
      data: meals,
    });
  }
}
export default MealController;
