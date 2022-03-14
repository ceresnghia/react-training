export const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = '.',
  thousands = ','
) => {
  return `$${amount
    .toFixed(decimalCount)
    .replace(/\d(?=(\d{3})+\.)/g, '$&' + decimal)}`;
};
