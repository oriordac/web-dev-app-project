const express = require('express');

const profile = require('../models/Profile');

const router = express.Router();

//Testing to see if tokens carries over after login
router.use(function(req, res, next) {
    console.log({ userId: req.userId })
    next();
});

router
    .get("/", (req, res) => res.send({
        Profile: profile.Profile[req.userId],
        Goals: profile.Goals[req.userId]
    }) )
    .post('/editprofile', (req, res) => res.send(
        profile.editProfile(req.body.userid, req.body.age, req.body.height, req.body.weight, req.body.description)
    ) )
    .post('/editgoals', (req, res) => res.send(
        profile.editGoals(req.body.userid, req.body.focus, req.body.steps, req.body.weight)
    ) )

module.exports = router;