import express from 'express';
import { getCarList, createNewCar, updateCar, deleteCar } from '../controllers/cars.js'

const router = express.Router();

router.get('/', getCarList);
router.post('/', createNewCar);
router.patch('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;