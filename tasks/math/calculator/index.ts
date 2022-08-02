export type OperatorRange = "+" | "-" | "/" | "*";

export const calculator = (a: number, operator: OperatorRange, c: number): number => {
  switch (operator) {
    case "+":
      return a + c;
    case "-":
      return a - c;
    case "/":
      return a / c;
    case "*":
      return a * c;
    default:
      const exhaustiveCheck: never = operator;
      throw new Error("Calculator does not support the provided operator");
  }
};
