export const productOfPrimes = (value: number): boolean => {
  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i == 0 && isPrime(i) && isPrime(value / i)) {
      return true;
    }
  }
  return false;
};

const isPrime = (num: number): boolean => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
