let express = require('express');
let mongoose = require('mongoose');
let contacts = require('./routes/contacts');
let bodyParser = require("body-parser");
let http = require('http');
let socketio = require('socket.io');

let app = express();
let server = http.Server(app);
let websocket = socketio(server);
server.listen(31000, () => console.log('listening on 31000'));

websocket.on('connection', (socket) => {
    console.log("Nouvelle personne");
});

//Pour utiliser les json dans les réponses
app.use(bodyParser.json());

// Connection BD
const db = "mongodb://Bakuto:azerty1@ds211613.mlab.com:11613/contacts";
mongoose.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

//Routes
app.get('/newContact', (req, res) => {
    console.log('Nouveau contact!');
    websocket.emit('newContact');
})
app.use('/contacts', contacts);

//Server
app.listen(30000, () => console.log('Server started'));