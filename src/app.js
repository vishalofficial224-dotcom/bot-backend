const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database.js')

const app = express();

app.use(express.json());
app.use(cors());

const botToken = "7809216837:AAHqn-t78sYdggjC5OLhcANrrpw2p1tlVtY";
const chatId = "8464377911";

app.post('/webhook', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

connectDB();
app.listen(3000, () => {
    console.log("server is listening 3000!")
})