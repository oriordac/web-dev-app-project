const express = require('express');

const liquid = require('../models/Liquid');

const router = express.Router();

router.use(function(req, res, next) {
    req.currentuser = liquid.getUser(req.userId)
    next();
});

router
    .get("/", (req, res) => res.send({
        Liquid: liquid.Liquid[req.currentuser]
    }) )
    .post('/add8', (req, res) => res.send(
        liquid.add8(req.currentuser)
    ) )
    .post('/add16', (req, res) => res.send(
        liquid.add16(req.currentuser)
    ) )
    .post('/add32', (req, res) => res.send(
        liquid.add32(req.currentuser)
    ) )

module.exports = router;