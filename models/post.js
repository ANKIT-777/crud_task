// post.js (model)
import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: String,
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
