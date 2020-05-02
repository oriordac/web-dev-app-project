const express = require('express');

const calories = require('../models/Calories');

const router = express.Router();

router.use(function(req, res, next) {
    req.currentuser = calories.getUser(req.userId)
    next();
});

router
    .get("/", (req, res) => res.send({
        Calories: calories.Calories[req.userId]
    }) )
    .post("/add", (req, res) => res.send(
        //remember to change userid later to safer method
        calories.add(req.userId, req.body.date, req.body.newFoodName, req.body.newCalorie, req.body.newProtein, req.body.newCarbs, req.body.newFat)
    ) )
    .post("/addnutrients", (req, res) => res.send(
        //remember to change userid later to safer method
        calories.addnutrients(req.userId,req.body.newCalorie, req.body.newProtein, req.body.newCarbs, req.body.newFat)
    ) )

module.exports = router;