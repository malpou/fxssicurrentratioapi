import express from "express";
import { getCurrentRatio } from "./data/getCurrentRatio";
import { CurrentRatioResponse } from "./types";

const app = express();
const port = 5000;

app.use(express.json());

let data: CurrentRatioResponse | undefined;

getCurrentRatio().then(res => {
  data = res;
});


app.get("/", async (_, res) => {
  res.json(data ? data : "No data awailable");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
