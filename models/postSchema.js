import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    model: String,
    details: String,
    featuredImage: String
});

const PostDetails = mongoose.model('PostDetails', postSchema);
export default PostDetails;

