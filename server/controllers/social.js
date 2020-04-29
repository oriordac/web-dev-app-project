const express = require('express');

const social = require('../models/Social');

const router = express.Router();

router
    .get("/", (req, res) => res.send({
        Social: social.Posts
    }) )
    .post('/newpost', (req, res) => res.send(
        //pass the token and the text for the post
        social.newPost(req.userId, req.body.text)
        ) )

module.exports = router;