type operatorRange = '+' | '-' | '/' | '*';

export const calculator = (a: number, operator: operatorRange, c: number): number => {
  switch (operator) {
    case '+':
      return a + c;
    case '-':
      return a - c;
    case '/':
      return a / c;
    case '*':
      return a * c;
    default:
      // throw new Error();
      const exhaustiveCheck: never = operator;
      throw new Error();
  }
};
