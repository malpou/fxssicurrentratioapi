import express from "express";
import chron from "node-cron";
import { getCurrentRatio } from "./data/getCurrentRatio";
import { CurrentRatioResponse } from "./types";

// Get data on server boot
let data: CurrentRatioResponse | undefined;
getCurrentRatio().then(res => {
  data = res;
});

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", async (_, res) => {
  res.json(data ? data : "No data awailable");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Chron job to fetch data at 6 & 18 o'clock
chron.schedule("0 6,18 * * *", async () => {
  data = await getCurrentRatio();
});