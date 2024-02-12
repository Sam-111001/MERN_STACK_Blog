import mongoose from "mongoose";

//Creating the user schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png",
    },
  },
  { timestamps: true }
);

//Creating the user model
const User = mongoose.model("User", userSchema);

//Exporting the user model
export default User;
