const express = require('express');

const photos = require('../models/Photos');

const router = express.Router();

router
    .get("/", (req, res) => res.send({
        Test: photos.Photos
    }) )
    .post('/add', (req, res) => res.send(photos.addPhoto(req.body.photoimage, req.body.locationname)))

module.exports = router;