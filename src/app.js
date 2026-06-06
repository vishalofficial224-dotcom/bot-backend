const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const botToken = "7809216837:AAHqn-t78sYdggjC5OLhcANrrpw2p1tlVtY";
const chatId = "8464377911";

app.post('/webhook', (req, res) => {
    const data = req.body;
    const command = data.message.text;
    const chatId = data.message.chat.id;

    if(command === "/start" && chatId) {
        sendBackInstruction();
    }

    res.sendStatus(200);
})

app.get('/example', (req, res) => {
    res.json({
        message: "this is working setup your bot now!"
    })
})

const sendBackInstruction = async() => {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            chat_id:chatId,
            text: "Hello Sir How Can I Help You?"
        })
    })
}

app.listen(3000, () => {
    console.log("server is listening 3000!")
})