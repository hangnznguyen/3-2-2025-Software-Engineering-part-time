const express = require('express');
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

// Route for adding two numbers
router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res);
});

// Route for subtracting two numbers
router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req, res);
});

// Route for multiplying two numbers
router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res);
});

// Route for dividing two numbers
router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res);
});

module.exports = router;