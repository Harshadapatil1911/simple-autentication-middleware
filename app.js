// app.js

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Use logger middleware
app.use(loggerMiddleware);

// Define your routes and other middleware
// For example:
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
