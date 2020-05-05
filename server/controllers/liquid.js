const express = require('express');

const liquid = require('../models/Liquid');

const router = express.Router();

router.use(function(req, res, next) {
    //the req.currentuser will get the "right" user from the array if the UserId are out of order
    req.currentuser = liquid.getUser(req.userId)
    console.log({BearerToken: req.userId, CurrentUser : req.currentuser})
    next();
});

router
    .get("/", (req, res) => res.send({
        Liquid: liquid.Liquid[req.currentuser]
    }) )
    .post('/add8', (req, res) => res.send(
        liquid.add8(req.userId)
    ) )
    .post('/add16', (req, res) => res.send(
        liquid.add16(req.userId)
    ) )
    .post('/add32', (req, res) => res.send(
        liquid.add32(req.userId)
    ) )

module.exports = router;