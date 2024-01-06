const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse URL-encoded body data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.post('/', (req, res) => {
    const number1 = parseInt(req.body.number1);
    const number2 = parseInt(req.body.number2);
    if (!isNaN(number1) && !isNaN(number2) && number1 > 0 && number2 > 0) {
        res.send(`Sum: ${number1 + number2}`);
    } else {
        res.send('Please enter positive integers only.');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export for testing
