const express = require('express');
const app = express();
const PORT = 8989;
const path = require('path');
const jwt = require('jsonwebtoken');

// Routers
const playersCtrl = require('./controllers/player.ctrl');
const teamCtrl = require('./controllers/team.ctrl');
const userCtrl = require('./controllers/user.ctrl');
const authCtrl = require('./controllers/auth.ctrl');

app.use('/', express.static('public'));

app.get('/:page', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, 'public', 'index.html')
    );
});

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.use('/api/auth', authCtrl);

app.use(function (req, res, next) {
    try {
        const [type, token] = req.headers.authorization.split(' ');
        const payload = jwt.verify(token, 'dfgjdfgjkdhgkgerg5454o');
        next();
    }
    catch (ex) {
        res.status(401).send();
    }
})

app.use('/api/player', playersCtrl);
app.use('/api/team', teamCtrl);
app.use('/api/user', userCtrl);



app.listen(PORT, () => console.log(`server started at port ${PORT}`))