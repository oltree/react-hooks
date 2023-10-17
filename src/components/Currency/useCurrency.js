export const useCurrency = (value) => {
  const dollars = value / 64;
  const euros = value / 68;
  const rubles = value / 25;
  const uyan = value / 9;

  return {
    dollars,
    euros,
    rubles,
    uyan,
  };
};
