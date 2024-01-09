import express from "express";
import { createPost  } from "../controller/PostCont.js";
const router = express.Router()

router.post('/xd', createPost)



export default router;