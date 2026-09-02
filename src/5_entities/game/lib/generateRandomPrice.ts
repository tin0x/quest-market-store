const generateRandomPrice = (id: number, min: number, max: number) => {
  const x = Math.sin(id) * 10000;
  const random = x - Math.floor(x);
  return Math.floor(min + random * (max - min + 1)).toFixed(2);
};

export default generateRandomPrice;
