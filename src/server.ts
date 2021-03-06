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
  res.json(data ? data : "No data available");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Chron job to fetch data every 15th minute
chron.schedule("0,15,30,45 * * * *", async () => {
  data = await getCurrentRatio();
});