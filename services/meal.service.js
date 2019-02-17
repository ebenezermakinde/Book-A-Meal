import dummyMeals from '../utils/dummyMeals';
import Meal from '../models/meals.models';

const MealService = {
  getAllMeals() {
    const validMeals = dummyMeals.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.description = meal.description;
      newMeal.price = meal.price;
      newMeal.image = meal.image;
      return newMeal;
    });
    return validMeals;
  },
  createMeal(newMeal) {
    const mealLength = dummyMeals.meals.length;
    const lastId = dummyMeals.meals[mealLength - 1].id;
    const newId = lastId + 1;
    newMeal.id = newId;
    dummyMeals.meals.push(newMeal);
    return newMeal;
  },
};

export default MealService;
