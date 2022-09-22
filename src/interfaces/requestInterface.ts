import { Request } from 'express';

export default interface IRequestInterface extends Request {
  id: number
}