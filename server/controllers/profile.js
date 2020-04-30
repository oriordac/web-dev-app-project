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
        Goals: profile.Goals[req.userId],
        Exercises: profile.Exercises[req.userId]
    }) )
    .post('/editprofile', (req, res) => res.send(
        profile.editProfile(req.userId, req.body.age, req.body.height, req.body.weight, req.body.description)
    ) )
    .post('/editgoals', (req, res) => res.send(
        profile.editGoals(req.userId, req.body.focus, req.body.steps, req.body.weight)
    ) )
    .post('/addexercise', (req, res) => res.send(
        profile.addExercise(req.userId, req.body.date, req.body.type, req.body.duration, req.body.calories)
    ) )

module.exports = router;
