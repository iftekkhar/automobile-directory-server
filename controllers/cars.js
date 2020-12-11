import mongoose from 'mongoose';
import PostDetails from '../models/postSchema.js'

export const getCarList = async (req, res) => {
    try {
        const allCars = await PostDetails.find();
        res.status(200).json(allCars);
    } catch (error) {
        res.status(404).json({ message: error })
    }

}
export const createNewCar = async (req, res) => {
    const car = req.body;
    const newCar = new PostDetails(car);
    try {
        await newCar.save()
        res.status(201).json(newCar);
    } catch (error) {
        res.status(409).json({ message: error })
    }

}
export const updateCar = async (req, res) => {
    const { id: _id } = req.params;
    const car = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Invalid Id');
    const updatedCar = await PostDetails.findByIdAndUpdate(_id, car, { new: true });
    res.json(updatedCar);

}
export const deleteCar = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid Id');
    await PostDetails.findByIdAndRemove(id);
    res.json({ message: 'Vehicle Deleted' });

}

