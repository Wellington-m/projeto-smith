import { RequestHandler } from 'express';
import { ValidationErrorItem } from 'joi';
import createUserValidationSchema from '../helpers/createUserValidationSchemaJoi';

const statusCode = (error: ValidationErrorItem): number => {
  const typeError = error.type;
  const REQUIRED_ERROR = 'any.required';

  if (typeError === REQUIRED_ERROR) return 400;

  return 422;
};

const createUserValidation: RequestHandler = (req, _res, _next) => {
  const { username, classe, level, password } = req.body;

  const { error } = createUserValidationSchema.validate({ username, classe, level, password });
  console.log(error);  
};

export default createUserValidation;