const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Messages = require('./MessageSchema');
const Pusher = require("pusher");
const cors = require('cors');
// const Rooms = require('./RoomSchema');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000','https://whatsapp-clone-84359.web.app'],
}));

const pusher = new Pusher({
    appId: "1542895",
    key: "671fcdeb962ef63a75d6",
    secret: "4ee4cddf785f498da84d",
    cluster: "ap2",
    useTLS: true
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection
db.once('open', () => {
    console.log('db connection successfully established')
    const msgcollections = db.collection('messagenews')
    const changestream = msgcollections.watch()

    changestream.on('change', (change) => {
        console.log(change)

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp
            });
        }
        else {
        } console.log('Error triggering Pusher')
    })
})

// app.get('/getrooms', (req, res) => {
//     Rooms.find((err, data) => {
//         if (err) {
//             res.status(500).send(err)
//         } else {
//             res.status(200).send(data)
//         }
//     })
// })

// app.post("/createroom", (req, res) => {
//     const dbRoom = req.body;
//     Rooms.create(dbRoom, (err, data) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(201).send(data);
//         }
//     })
// })

app.get('/getmessages', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.post("/messagesnew", (req, res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.listen(port, () => console.log('Server running on port 5000'));
