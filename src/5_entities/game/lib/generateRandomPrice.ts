const generateRandomPrice = (min: number, max: number) => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

export default generateRandomPrice;
