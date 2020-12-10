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

