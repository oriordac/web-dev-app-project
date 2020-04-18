const express = require('express');

const profile = require('../models/Profile');

const router = express.Router();

router
    .get("/", (req, res) => res.send({
        Profile: profile.Profile,
        Goals: profile.Goals
    }) )
    .post('/editprofile', (req, res) => res.send(
        profile.editProfile(req.body.userid, req.body.age, req.body.height, req.body.weight, req.body.description)
    ) )
    .post('/editgoals', (req, res) => res.send(
        profile.editGoals(req.body.userid, req.body.focus, req.body.steps, req.body.weight)
    ) )

module.exports = router;