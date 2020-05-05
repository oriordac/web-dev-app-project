//Is there a way to get only the array from this model?
const profile = require('../models/Profile');

const Posts = [
    {
        UserId: 0, 
        Name: "Thor Odinson", 
        Handle: "odinson", 
        Image: "http://cs.newpaltz.edu/~oriordac1/assets/thorodinson.jpg",
        Text: "I love hiking in Jotunheim.",
        Timestamp: "9:00 - 26 Apr",
        Upvote: 1,
        ReplyCount: 1,
        Comment: [
            {
                UserId: 0, 
                Name: "Loki Laufeyson", 
                Handle: "silvertongue", 
                Image: "http://cs.newpaltz.edu/~oriordac1/assets/loki.jpg",
                Text: "I hate you, brother.",
                Timestamp: "9:15 - 26 Apr",
                Upvote: 0,
                Liked: []
            }
        ],
        //Use this array to determine who liked the post. They should know that they liked it by a color change
        Liked: [
            {UserId: 1}
        ]
    }
];

function padTime(time) {
    return (time < 10 ? '0' : '') + time;
}

function shortDateBuilder() {
    const d = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const hour = d.getHours();
    const minute = padTime(d.getMinutes());
    return `${hour}:${minute} - ${date} ${month}`;
}
function newPost(userid, text) {
    //get the user with the matching userid from the header
    const user = profile.Profile.find(x=> x.UserId == userid);
    //get the current time on the server
    const timestamp = shortDateBuilder();
    //push the user's public info and text for post
    Posts.unshift({
        UserId: user.UserId,
        Name: user.Name,
        Handle: user.Handle,
        Image: user.Image,
        Text: text,
        Timestamp: timestamp,
        Upvote: 0,
        ReplyCount: 0,
        Comment: [],
        Liked: []
    });
    return true;
};
function newComment(userid, index, text) {
    const user = profile.Profile.find(x=> x.UserId == userid);
    const timestamp = shortDateBuilder();
    //use the index to target the original post that this is a comment to
    Posts[index].Comment.push({
        UserId: user.UserId,
        Name: user.Name,
        Handle: user.Handle,
        Image: user.Image,
        Text: text,
        Timestamp: timestamp,
        Upvote: 0,
        Liked: []
    });
    Posts[index].ReplyCount++;
    return true;
};
function likePost(userid, index) {
    //get the post with the matching index that the user wants to like
    const post = Posts[index];
    //get the fan's userid to store in the Like property array of the post
    const fan = profile.Profile.find(x=> x.UserId == userid);
    //check to see if the fan already liked the post
    const check = post.Liked.findIndex(x => x.UserId == fan.UserId);
    //if the index is negative, the user can like the post for the first time
    if (check < 0) {
        post.Liked.push({UserId: fan.UserId});
        post.Upvote++;
        return true;
    } else {
        post.Upvote--;
        post.Liked.splice(check, 1);
        return true;
    } 
};
function likeComment(userid, postindex, commentindex) {
    const comment = Posts[postindex].Comment[commentindex];
    //get the fan's userid to store in the Like property array of the post
    const fan = profile.Profile.find(x=> x.UserId == userid);
    //check to see if the fan already liked the post
    const check = comment.Liked.findIndex(x => x.UserId == fan.UserId);
    //if the index is negative, the user can like the post for the first time
    if (check < 0) {
        comment.Liked.push({UserId: fan.UserId});
        comment.Upvote++;
        return true;
    } else {
        comment.Upvote--;
        comment.Liked.splice(check, 1);
        return true;
    }
}

module.exports = {
    Posts,
    newPost, newComment, likePost, likeComment
}