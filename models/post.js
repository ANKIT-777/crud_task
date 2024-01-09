import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    content: {
        type : String, 
        required : true
    },
    image: String,
  }
);

const PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
