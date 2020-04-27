const express = require('express');

const routines = require('../models/Routines');

const router = express.Router();

router
    .get("/", (req, res) => res.send({
        Routines: routines.Routines
    }) )
    .post('/add', (req, res) => res.send(
        routines.add(req.body.newTitle, req.body.newPhoto, req.body.newExer1, req.body.newExer2, req.body.newExer3)
        ) )
    .post('/remove', (req, res) => res.send(
        routines.remove(req.body.index)
        ) )

module.exports = router;
