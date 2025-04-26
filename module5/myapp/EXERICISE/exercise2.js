const express = require('express');
const router = express.Router();



// new route for subtract two numbers

    router.get('/subtract', (req, res) => {
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let result= number1 - number2
        console.log(result);
        res.status(200)
        res.json({result: result});

 // new route for divide two numbers       
     router.get('/divide', (req, res) => {
      let number1 = parseInt(req.query.num1);
      let number2 = parseInt(req.query.num2);
        
      if (number2 === 0) {
      return res.status(400).json({ error: "Cannot divide by zero" });
        }
        
    let result = number1 / number2;
    console.log(result);
    res.status(200).json({ result: result });
        });
     
});



 // new route for multiply two numbers 
 router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let result = number1 * number2;
    console.log(result);
    res.status(200).json({ result: result });
});


module.exports = router;