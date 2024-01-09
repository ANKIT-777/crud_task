import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
  
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  };

export default connectDB; 
