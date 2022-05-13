const express = require('express');
const uuidv4 = require('uuid').v4;
const dal = require('../DAL');

const router = express.Router();

router.post('/', function (req, res) {
    const user = {
        id: uuidv4(),
        first: req.body['first'],
        last: req.body['last'],
        email: req.body['email'],
        password: req.body['password'],
        playerIds: []
    }

    dal.add('user', user);
    res.send(user);
})



router.get('/:id', function (req, res) {
    const user = dal.readOne('user', req.params.id);
    res.send(user);
});

module.exports = router;