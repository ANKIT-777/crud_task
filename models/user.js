import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
  firstname: {
      type: String,
      required: true
  },
  lastname : {
      type: String,
      required: true
  },
},
{timestamps: true}
)

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;
