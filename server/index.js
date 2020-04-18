const express = require('express');
const path = require('path');

const photosController = require('./controllers/photos');
const usersController = require('./controllers/users');
const routinesController = require('./controllers/routines');
const profileController = require('./controllers/profile');

const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(__dirname + '/../client/dist'))
    
    .use('/', photosController)
    .use('/login', usersController)
    .use('/routines', routinesController)
    .use('/profile', profileController)

    /*.use((req, res) => {
        const homePath = path.join(__dirname , '/../dist/index.html');
        res.sendFile(homePath);
    }) */
    .use((err, req, res, next) => {
        console.log(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send({ message: err.message})
    })

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));