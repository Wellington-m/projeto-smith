import { RequestHandler } from 'express';
import loginValidationSchema from '../helpers/loginValidationSchemaJoi';

const loginValidation:RequestHandler = (req, res, next) => {
  const { username, password } = req.body;

  const { error } = loginValidationSchema.validate({ username, password });

  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

export default loginValidation;