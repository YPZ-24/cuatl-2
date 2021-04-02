/**
 * This function is used to format prices to make them look like:
 * US 300.90, MX 1589.90 or GB 12.00
 *
 * Currency codes (ISO 4217 currency codes) are passed as arguments depending on
 * i18n global context.
 */
const formatPrice: (currencyCode: string, price: number | string) => string = (currencyCode, price) => {
  //: force two decimals
  const priceWithDecimals = parseFloat(String(price)).toFixed(2);

  return `${currencyCode.toUpperCase()} ${priceWithDecimals}`;
};

export default formatPrice;
