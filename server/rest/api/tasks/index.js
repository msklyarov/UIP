import {Router} from 'express';
import list from './list.js';

const router = Router();

router.use('/', list);

export default router;
