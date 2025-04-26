const CalculatorClass = require('../libraries/CalculatorClass');


let calculator = new CalculatorClass();

// ADD
const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calculator.add(number1, number2);
    console.log(sum);
    res.status(200).json({ result: sum });
}

// SUBTRACT
const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = calculator.subtract(number1, number2);
    console.log(result);
    res.status(200).json({ result: result });
}

// MULTIPLY
const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = calculator.multiply(number1, number2);
    console.log(result);
    res.status(200).json({ result: result });
}

// DIVIDE
const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    if (number2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }

    let result = calculator.divide(number1, number2);
    console.log(result);
    res.status(200).json({ result: result });
}

// EXPORT all controller functions
module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
}