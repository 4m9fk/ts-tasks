export const primeInRange = (num1: number, num2: number): boolean => {
  function isPrime(number: number): boolean {
    for (let i = 2; i < number; i++) {
      if (!(number % i)) return false;
    }
    return number > 1;
  }

  for (let j = num1; j <= num2; j++) {
    if (isPrime(j)) return true;
  }
  return false;
};
