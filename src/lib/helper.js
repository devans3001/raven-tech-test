


export const formatNumber = (input) => {
  if (input === "") return "";
  
  // Handle already formatted numbers
  if (typeof input === "string" && input.includes(",")) {
    return input;
  }
  
  const num = input.toString().replace(/\D/g, '');
  if (num.length === 0) return '';
  
  const numValue = parseFloat(num) / 100;
  return numValue.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};
export function parseFormattedNumber(formattedString) {
  return formattedString.replace(/,/g, '');
}
export function formatNumberWithCommas(value) {
  if (!value) return '';
  
  let cleanValue = value.toString().replace(/[^\d.]/g, '');
  
  const parts = cleanValue.split('.');
  let integerPart = parts[0];
  let decimalPart = parts[1] || '';
  
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  decimalPart = decimalPart.slice(0, 2);
  
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}



  export function formatMoney(value,car=2, currency = 'USD', locale = 'en-US') {
    const numericValue = typeof value === 'string' 
      ? parseFloat(value.replace(/[^0-9.-]/g, '')) 
      : value;
    
    // if (isNaN(numericValue)) {
    //   throw new Error('Invalid input: Value must be a number or numeric string.');
    // }
  
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: car,
      maximumFractionDigits: car,
    }).format(numericValue);
  }


  export function checkNumberSign(num) {
    const val = typeof num === 'string' ? parseFloat(num) : num;
    
    if (isNaN(val)) {
        return 'invalid';
    }
    
    if (val > 0) return 'positive';
    if (val < 0) return 'negative';
    // return 'zero';
}

export function formatToBinanceSymbol(coinGeckoSymbol, quote = 'USDT') {
  return `${coinGeckoSymbol.toUpperCase()}${quote.toUpperCase()}`;
}
