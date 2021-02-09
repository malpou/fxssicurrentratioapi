import express from "express";
//import cors from "cors";
import { getCurrentRatio } from "./data/getCurrentRatio";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 1377;

//app.use(cors());
app.use(express.json());

app.get("/", async (_, res) => {
  res.json(await getCurrentRatio());
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
