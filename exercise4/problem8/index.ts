class Calculator {
  result: number;

  constructor(initialValue: number) {
    this.result = initialValue;
  }

  add(num: number) {
    this.result += num;
    return this;
  }

  subtract(num: number) {
    this.result -= num;
    return this;
  }

  divide(num: number) {
    this.result /= num;
    return this;
  }

  multiply(num: number) {
    this.result *= num;
    return this;
  }

  logResult(num: number) {
    console.log(this.result);
    return this;
  }
}

export default Calculator;
