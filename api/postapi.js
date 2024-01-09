import express from "express";
import { createPost,getPost  } from "../controller/PostCont.js";
const router = express.Router()

router.post('/xd', createPost)
router.get ('/:id', getPost)


export default router;