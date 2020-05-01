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
    .post('/upvote', (req, res) => res.send(
        social.upvote(req.body.index)
        ) )
    .post('/downvote', (req, res) => res.send(
        social.downvote(req.body.index)
        ) )

module.exports = router;