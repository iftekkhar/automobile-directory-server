import express from 'express';
import { getCarList, createNewCar, updateCar } from '../controllers/cars.js'

const router = express.Router();

router.get('/', getCarList);
router.post('/', createNewCar);
router.patch('/:id', updateCar);

export default router;