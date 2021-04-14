const express = require('express')
const app = express()
const port = 3000


app.use(express.json());

const fs = require('fs');
const fileName = './data/users.json';
const users = require(fileName);


app.get('/users', function (req, res) {
    res.send(users);
});

app.get('/user/:id', function (req, res) {
    res.send(users.find(user => user.id == req.params.id));
});

app.post('/user', function (req, res) {
    users.push(req);

    fs.writeFile(fileName, JSON.stringify(users), function callback(err) {
        res.send(err);
    });
    res.send(users);
});

app.delete('/user', function (req, res) {
    users.pop(req);

    fs.writeFile(fileName, JSON.stringify(users), function callback(err) {
        res.send(err);
    });
    res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})