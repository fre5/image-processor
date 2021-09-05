import express from 'express';
import { resizer, displayer } from '../../utilities/resizer';

const api = express.Router();

api.use('/images', resizer, displayer);

export default api;
