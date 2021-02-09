import { CurrentRatioResponse } from "../types";
import puppeteer from "puppeteer";
import { getCurrencyPercentage } from "../utils/getCurrencyPercentage";

export const getCurrentRatio = async (): Promise<CurrentRatioResponse> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://fxssi.com/tools/current-ratio");

  const data = [];

  data.push(
    await getCurrencyPercentage(
      "#thePairs > div.tool-button-group > div:nth-child(1) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      "#thePairs > div.tool-button-group > div:nth-child(2) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      "#thePairs > div.tool-button-group > div:nth-child(3) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      "#thePairs > div.tool-button-group > div:nth-child(4) > div",
      page
    )
  );

  return {
    lastUpdate: Date.now(),
    data
  };
};
