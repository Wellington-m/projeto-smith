import jwt, { SignOptions } from 'jsonwebtoken';
import IPayload from '../interfaces/payloadInterface';

const JWT_SECRET_KEY = 'batatinha';
const JWT_OPTIONS: SignOptions = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (payload: IPayload) => {
  const token = jwt.sign(payload, JWT_SECRET_KEY, JWT_OPTIONS);
  return token;
};

const verifyToken = (token: string) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET_KEY);
    return payload;
  } catch (error) {
    return null;
  }
};

export default { createToken, verifyToken };