//Is there a way to get only the array from this model?
const profile = require('../models/Profile');

const Posts = [
    {
        UserId: 0, 
        Name: "Thor Odinson", 
        Handle: "odinson", 
        Image: "http://cs.newpaltz.edu/~oriordac1/assets/thorodinson.jpg",
        Text: "I love hiking in Jotunheim."
    }
]

function newPost(userid, text) {
    //get the user with the matching userid from the header
    const user = profile.Profile.find(x=> x.UserId == userid);
    //push the user's public info and text for post
    Posts.unshift({
        UserId: user.UserId,
        Name: user.Name,
        Handle: user.Handle,
        Image: user.Image,
        Text: text
    });
    return true;
}

module.exports = {
    Posts,
    newPost
}