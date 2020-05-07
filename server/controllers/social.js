const express = require('express');

const social = require('../models/Social');

const router = express.Router();

router
    .get("/", (req, res) => res.send({
        Social: social.Posts.map(x => ({
            ...x,
            isILiked: x.Liked.some(y => y.UserId == req.userId),
            whoLikedIt: social.whoLikedIt(x),
            Comment: x.Comment.map(a => ({
                ...a, 
                isILiked: a.Liked.some(b => b.UserId == req.userId),
                whoLikedIt: social.whoLikedIt(a)
            }) )
        }) )
    }) )
    .post('/newpost', (req, res) => res.send(
        //pass the token and the text for the post
        social.newPost(req.userId, req.body.text)
        ) )
    .post('/newcomment', (req, res) => res.send(
        //pass the token and the text for the post
        social.newComment(req.userId, req.body.index, req.body.text)
        ) )
    .post('/likepost', (req, res) => res.send(
        social.likePost(req.userId, req.body.index)
        ) )
    .post('/likecomment', (req, res) => res.send(
        social.likeComment(req.userId, req.body.postindex, req.body.commentindex)
        ) )

module.exports = router;