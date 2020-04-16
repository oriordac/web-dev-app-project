const express = require('express');

const photos = require('../models/Photos');

const router = express.Router();

router
    .get("/", (req, res) => res.send({
        Photos: photos.Photos
    }) )

module.exports = router;