import puppeteer from "puppeteer";
import { buySelector, sellSelector } from "../constants";
import { getFloatFromPercentageString } from "./getFloatFromPercentageString";
import { getTextFromElement } from "./getTextFromElement";

export const getCurrencyPercentage = async (
  currencySelector: string,
  page: puppeteer.Page
): Promise<getCurrencyPercentageResponse> => {
  await page.click(currencySelector);

  const currencyElement = await page.$(currencySelector);
  const buyElement = await page.$(buySelector);
  const sellElement = await page.$(sellSelector);

  const currencyValue = await getTextFromElement(currencyElement, page);
  const buyValue = await getTextFromElement(buyElement, page);
  const sellValue = await getTextFromElement(sellElement, page);

  return {
    currency: currencyValue,
    average: {
      buy: getFloatFromPercentageString(buyValue),
      sell: getFloatFromPercentageString(sellValue)
    }
  };
};

type getCurrencyPercentageResponse = {
  currency: string;
  average: {
    buy: number;
    sell: number;
  };
};
