const express = require('express');
const app1 = express();
const app2 = express();

const port1 = 3000;
app1.get('/', (req, res) => {
  res.send('this is app1');
});
app1.listen(port1, () => {
  console.log(`Server 1 is running at http://localhost:${port1}`);
});

const port2 = 80;
app2.get('/', (req, res) => {
  res.send('this is app2');
});
app2.listen(port2, () => {
  console.log(`Server 2 is running at http://localhost:${port2}`);
});

