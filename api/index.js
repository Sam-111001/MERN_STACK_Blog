import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.router.js";

//Loading the .env file into process.env
dotenv.config();

//Creating mongoose database connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb connected!");
  })
  .catch((err) => {
    console.log(err);
  });

//Creating an express application
const app = express();

//Creating APIs
//Api for user
app.use("/api/user", userRoutes);

//Application listening on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
