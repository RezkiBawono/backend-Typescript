import express, { Request, Response } from "express";
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("This is the Front Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
