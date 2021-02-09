import puppeteer from "puppeteer";
import { baseCurrencySelector } from "../constants";
import { CurrentRatioResponse } from "../types";
import { getCurrencyPercentage } from "../utils/getCurrencyPercentage";

export const getCurrentRatio = async (): Promise<CurrentRatioResponse> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://fxssi.com/tools/current-ratio");

  const data = [];

  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(1) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(2) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(3) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(4) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(5) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(6) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(7) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(8) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(9) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(10) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(11) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div:nth-child(12) > div",
      page
    )
  );
  data.push(
    await getCurrencyPercentage(
      baseCurrencySelector + "div.column-1 > div",
      page
    )
  );
  await browser.close();

  console.log("🔥 Data got updated!");
  return {
    lastUpdate: Date.now(),
    data
  };
};
