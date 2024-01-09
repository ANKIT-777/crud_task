import PostModel from "../models/post.js"


export const createPost = (req,res) => {
    const newPost = new PostModel(req.body);
         newPost.save();
        res.status(200).json("New Post Created!")
    }

    
export const getPost =  (req, res) => {
        const id = req.params.id;
        const post =  PostModel.findById(id).exec();
        res.status(200).json(post);
      };



