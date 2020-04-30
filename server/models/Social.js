//Is there a way to get only the array from this model?
const profile = require('../models/Profile');

const Posts = [
    {
        UserId: 0, 
        Name: "Thor Odinson", 
        Handle: "odinson", 
        Image: "http://cs.newpaltz.edu/~oriordac1/assets/thorodinson.jpg",
        Text: "I love hiking in Jotunheim.",
        Timestamp: "9:00 - 26 Apr"
    }
];

function padTime(time) {
    return (time < 10 ? '0' : '') + time;
}

function shortDateBuilder() {
    let d = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let hour = d.getHours();
    let minute = padTime(d.getMinutes());
    return `${hour}:${minute} - ${date} ${month}`;
}
function newPost(userid, text) {
    //get the user with the matching userid from the header
    const user = profile.Profile.find(x=> x.UserId == userid);
    //get the current time on the server
    let timestamp = shortDateBuilder();
    //push the user's public info and text for post
    Posts.unshift({
        UserId: user.UserId,
        Name: user.Name,
        Handle: user.Handle,
        Image: user.Image,
        Text: text,
        Timestamp: timestamp
    });
    return true;
}

module.exports = {
    Posts,
    newPost
}