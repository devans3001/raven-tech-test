


export const formatNumber = (input) => {
    const num = input.replace(/\D/g, '');
    
    if (num.length === 0) return '';
    
    const numValue = parseFloat(num) / 100;
    return numValue.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };


  export function formatMoney(value,car=2, currency = 'USD', locale = 'en-US') {
    const numericValue = typeof value === 'string' 
      ? parseFloat(value.replace(/[^0-9.-]/g, '')) 
      : value;
    
    if (isNaN(numericValue)) {
      throw new Error('Invalid input: Value must be a number or numeric string.');
    }
  
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: car,
      maximumFractionDigits: car,
    }).format(numericValue);
  }