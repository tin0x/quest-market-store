const getCardBrand = (cardNumber: string) => {
  const clean = cardNumber.replaceAll('-', '');

  if (/^4/.test(clean)) {
    return 'visa';
  }

  if (/^5[1-5]/.test(clean) || /^2[2-7]/.test(clean)) {
    return 'mastercard';
  }
};

export default getCardBrand;
