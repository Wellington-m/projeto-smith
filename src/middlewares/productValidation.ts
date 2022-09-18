import { RequestHandler } from 'express';
import { ValidationErrorItem } from 'joi';
import productValidationSchema from '../helpers/productValidationSchemaJoi';

const statusCode = (error: ValidationErrorItem) => {
  const messageError = error.type;
  const REQUIRED_ERROR = 'any.required';
  // const STRING_ERROR = 'string.base';
  // const MIN_ERROR = 'string.min';

  if (messageError === REQUIRED_ERROR) return 400;
  // if (messageError === STRING_ERROR) return 422;
  // if (messageError === MIN_ERROR) return 422;
  return 422;
};

const productValidation: RequestHandler = (req, res, _next) => {
  const { name, amount } = req.body;

  const { error } = productValidationSchema.validate({ name, amount });
  if (error) {
    return res.status(statusCode(error.details[0])).json({ message: error.details[0].message });
  } 
};

export default productValidation;