const express = require('express');

const routines = require('../models/Routines');
const users = require('../models/Users');

const router = express.Router();

router
    .get("/", (req, res) => {
        const user = users.checkAdminStatus(req.userId)
        res.send({
            Routines: routines.Routines,
            Admin: user
        }) 
    })
    .post('/add', (req, res) => res.send(
        routines.add(req.body.newTitle, req.body.newPhoto, req.body.newExer1, req.body.newExer2, req.body.newExer3)
        ) )
    .post('/remove', (req, res) => res.send(
        routines.remove(req.body.index)
        ) )

module.exports = router;
