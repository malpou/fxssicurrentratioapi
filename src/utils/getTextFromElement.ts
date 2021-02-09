import puppeteer from "puppeteer";

export const getTextFromElement = async (
  element: puppeteer.ElementHandle<Element> | null,
  page: puppeteer.Page
) => {
  return await page.evaluate(el => el.textContent.trim(), element);
};
