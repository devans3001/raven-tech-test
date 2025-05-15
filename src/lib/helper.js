


export const formatNumber = (input) => {
    const num = input.replace(/\D/g, '');
    
    if (num.length === 0) return '';
    
    const numValue = parseFloat(num) / 100;
    return numValue.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };
