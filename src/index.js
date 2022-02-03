const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));
app.get('/', (req, res) => {
    res.sendFile('C:/Users/laksh/Documents/Projects/SQLite/peg-solitaire/index.html');
});
app.listen(PORT, (req, res) => {
    console.log(`Server running on http://localhost:${PORT}/`);
});