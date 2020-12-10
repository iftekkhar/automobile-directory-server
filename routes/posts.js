import express from 'express';
import { getCarList, createNewCar } from '../controllers/cars.js'

const router = express.Router();

router.get('/', getCarList);
router.post('/', createNewCar);

export default router;