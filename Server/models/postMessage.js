import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tags: String,
    selectedFile: String,
    GoogleMapsUrl: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model(`PostMessage`, postSchema, "files");

export default PostMessage;