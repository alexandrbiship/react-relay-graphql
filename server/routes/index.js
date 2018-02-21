import express from 'express';
import get from './get';
import reroute from './reroute';

const router = express.Router();

router.get('/', get);
// router.get('/podcasts', get);

router.get('*', reroute);

export default router;
