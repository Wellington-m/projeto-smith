import { RequestHandler } from 'express';
import { ValidationErrorItem } from 'joi';
import productValidationSchema from '../helpers/productValidationSchemaJoi';

const statusCode = (error: ValidationErrorItem): number => {
  const typeError = error.type;
  const REQUIRED_ERROR = 'any.required';

  if (typeError === REQUIRED_ERROR) return 400;

  return 422;
};

const productValidation: RequestHandler = (req, res, next) => {
  const { name, amount } = req.body;

  const { error } = productValidationSchema.validate({ name, amount });
  if (error) {
    return res.status(statusCode(error.details[0])).json({ message: error.details[0].message });
  }

  next();
};

export default productValidation;