import { RequestHandler } from 'express';
import createUserValidationSchema from '../helpers/createUserValidationSchemaJoi';

const createUserValidation: RequestHandler = (req, _res, _next) => {
  const { username, classe, level, password } = req.body;

  const { error } = createUserValidationSchema.validate({ username, classe, level, password });
  console.log(error);  
};

export default createUserValidation;