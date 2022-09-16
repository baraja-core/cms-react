const isNumeric = (n: string) => {
  return !isNaN(parseFloat(n)) && isFinite(Number(n));
};

export default isNumeric;
