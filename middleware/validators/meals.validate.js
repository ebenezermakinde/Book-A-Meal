import Joi from 'joi';
import validate from 'express-validation';

const description = Joi.string()
  .min(3)
  .max(45);
const price = Joi.number()
  .min(1)
  .positive();
const image = Joi.string()
  .min(7);

const validateCreateMeal = validate({
  body: {
    description: description.required(),
    price: price.required(),
    image: image.required(),
  },
});

export default validateCreateMeal;
