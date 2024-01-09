import PostModel from "../models/post.js";


export const createPost = async (req, res) => {
    try {
      const newPost = new PostModel(req.body);
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
