import { RequestHandler } from 'express';

const create: RequestHandler = async (_req, _res) => {
  console.log('Ola');
};

export default { create };