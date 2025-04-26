
const Logger = require("./LoggerClass"); // Import the LoggerClass

let loggerObject = new Logger();

class CalculatorClass {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.id = Math.floor(Math.random() * 1000000000);
  }

  #log(result) {
    loggerObject.log(this.id, result); // ✅ Use the logger object to log
  }

  add(num1, num2) {
    const result = num1 + num2;
    this.#log(result);
    return result;
  }

  subtract(num1, num2) {
    const result = num1 - num2;
    this.#log(result);
    return result;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    const result = num1 / num2;
    this.#log(result);
    return result;
  }

  multiply(num1, num2) {
    const result = num1 * num2;
    this.#log(result);
    return result;
  }
}

module.exports = CalculatorClass;