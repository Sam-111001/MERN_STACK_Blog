import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

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

app.use(cors());

//Allowing the server to get json requests
app.use(express.json());

//Creating APIs
//Api for user
app.use("/api/user", userRoutes);
app.use("/api/auth", authRouter);

//Creating a middle to handle errors
app.use((err, req, res, next) => {
  const errorCode = err.errorCode || 500;
  const errorMessage = err.message || "Internal Server Error";
  res.status(errorCode).json({
    success: false,
    errorCode,
    errorMessage,
  });
  next();
});

//Application listening on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
