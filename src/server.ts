import express from "express";
//import cors from "cors";
import { getCurrentRatio } from "./data/getCurrentRatio";

const app = express();
const port = 5000;

//app.use(cors());
app.use(express.json());

app.get("/", async (_, res) => {
  res.json(await getCurrentRatio());
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
