// import { useMemo } from 'react'; обернуть в useMemo будет затратно, есть смысл обернуть если O(сложность алгоритма) > 1 или много переменных с присваиваниями и математическими операциями > 10(к примеру)

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
