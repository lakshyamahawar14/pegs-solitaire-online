const express = require('express');
const path = require('path');
const addUser = require('./database.js');

const app = express();
const PORT = 5000;
const staticPath = path.join(__dirname, '../public');

// addUser("test4", 7000);

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(staticPath+'/index.html');
});

app.listen(PORT, (req, res) => {
    console.log(`Server running on http://localhost:${PORT}/`);
});