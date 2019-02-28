// implement your API here
const express = require('express'); // import express framework as a function
const server = express(); // use express as server object
server.use(express.json()); // json for the win

const cors = require('cors');  // cross-origin resource sharing
server.use(cors());

const db = require('./data/db'); // db data

const port = 9090;

server.get('/', (req, res) => {
    res.send('api up, yo');
});

server.get('/api/users', (req, res) => {
    db.find()
    .then((users) => {
        res.send(users);
    })
    .catch(() => {
        res.status(500).send('That information cannot be retrieved')
    });
});

server.get('/api/users/:id', (req, res) => {
    db.findById(req.params.id)
    .then((user) => {
        if (user.length === 0) {
            res.status(404).send('That user does not exist');
        }
        else {
            res.status(200).send(user)
        }
    })
    .catch(() => {
        res.status(404).send('That user does not exist')
    })
});

// server.post('/api/users, (req, res) => {



// });

server.listen(port, () => {   // waiting for request
    console.log(`server is listening on port ${port}`); // response
});