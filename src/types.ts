export type CurrentRatioResponse = {
  lastUpdate: number;
  data: CurrencyRatio[];
};

export type CurrencyRatio = {
  currency: string;
  average: {
    buy: number;
    sell: number;
  };
};
