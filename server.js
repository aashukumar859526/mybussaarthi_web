const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, '0.0.0.0', () => {
    console.log("===================================");
    console.log(" SERVER CHAL GAYA HAI! 🚀");
    console.log(" Browser me ja kar refresh kar:");
    console.log(" http://localhost:5000");
    console.log("===================================");
});
