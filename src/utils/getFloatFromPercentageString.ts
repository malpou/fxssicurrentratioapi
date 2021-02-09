export const getFloatFromPercentageString = (percentage: string): number => {
  return Number.parseFloat(percentage.replace("%", ""));
};
