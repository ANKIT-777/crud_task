import express from "express";
import connectDB from "./db.js"
import postRoutes from  "./api/postapi.js"

const app = express();


connectDB();

app.use('/post' , postRoutes);

const PORT = 8210;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
