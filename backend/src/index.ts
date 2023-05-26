import express, { Request, Response } from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import TaskModel from "../models/Task";
const connectToDatabase = require("../config/connectDB");
const app = express();
const PORT = process.env.PORT;

config();

app.use(express.json());

connectToDatabase();

app.get("/", (req: Request, res: Response) => {
  res.send("This is the Front Page");
});

app.get("/task", async (req: Request, res: Response) => {
  const getTask = await TaskModel.find();
  console.log(getTask);
  res.json(getTask);
});

app.post("/task", async (req, res) => {
  const newTask = new TaskModel({
    title: "This is the second task",
  });
  const createdTask = await newTask.save();
  res.json(createdTask);
});

// Start the server
mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
});
