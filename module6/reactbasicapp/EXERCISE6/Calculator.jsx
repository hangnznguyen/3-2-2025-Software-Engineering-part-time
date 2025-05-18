import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;

    if (operator === '+') {
      res = a + b;
    } else if (operator === '-') {
      res = a - b;
    } else if (operator === '*') {
      res = a * b;
    } else if (operator === '/') {
      if (b === 0) {
        res = 'Cannot divide by zero';
      } else {
        res = a / b;
      }
    } else {
      res = 'Invalid operator';
    }

    setResult(res);
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <input
        type="text"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Operator (+ - * /)"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      />
      <input
        type="text"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>

      {result !== null && (
        <p><strong>Result:</strong> {result}</p>
      )}
    </div>
  );
}

export default Calculator;