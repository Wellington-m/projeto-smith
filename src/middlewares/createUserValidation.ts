import { RequestHandler } from 'express';
import { ValidationErrorItem } from 'joi';
import createUserValidationSchema from '../helpers/createUserValidationSchemaJoi';

const statusCode = (error: ValidationErrorItem): number => {
  const typeError = error.type;
  const REQUIRED_ERROR = 'any.required';

  if (typeError === REQUIRED_ERROR) return 400;

  return 422;
};

const createUserValidation: RequestHandler = (req, res, next) => {
  const { username, classe, level, password } = req.body;

  const { error } = createUserValidationSchema.validate({ username, classe, level, password });
  if (error) {
    const errorDetails = error.details[0];
    return res.status(statusCode(errorDetails)).json({ message: errorDetails.message });
  } 

  next();
};

export default createUserValidation;