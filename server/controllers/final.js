const express = require('express');

const final = require('../models/Final');

const router = express.Router();

router
    .get("/", (req, res) => res.send({
        Test: final.Test
    }) )

module.exports = router;