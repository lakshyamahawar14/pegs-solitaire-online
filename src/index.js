const express = require('express');
const path = require('path');
const addUser = require('./database.js');

const app = express();
const PORT = 5000;
const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));

app.use(express.json());

app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(staticPath+'/index.html');
});

app.post('/leaderboard', (req, res) => {
    var _username = req.body.username;
    var _score = req.body.score;
    addUser(_username, _score);
    res.sendFile(staticPath+'/leaderboard.html');
})

app.listen(PORT, (req, res) => {
    console.log(`Server running on http://localhost:${PORT}/`);
});