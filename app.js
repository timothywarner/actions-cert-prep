const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.get('/', (req, res) => {
  res.render('index', { result: null, error: null });
});

app.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2 || isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
    res.render('index', { result: null, error: 'Please enter positive integers only.' });
  } else {
    const sum = parseInt(num1) + parseInt(num2);
    res.render('index', { result: `Sum = ${sum}`, error: null });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;  // For testing
