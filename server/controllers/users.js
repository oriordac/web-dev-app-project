const express = require('express');

const users = require('../models/Users');

const router = express.Router();

router
    .get("/", (req, res) => res.send({
        Users: users.Users
    }) )
    .post("/login", async (req, res) => {
        try {
            const user = await users.Login(req.body.username, req.body.password);
            res.send( {...user, Password: undefined} );
        } catch (error) {
            res.status(401).send( {message: error.message} );
        }
    })

module.exports = router;
