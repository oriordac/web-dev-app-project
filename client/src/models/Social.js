import myFetch from "./myFetch";

export default {
    State: {},
    Init(){
        myFetch('/social')
            .then(x=> { 
                this.State = {...x, Social: x.Social.map(r => ({...r, Liked: false}) )};
                console.log(x);
            });
    },
    //POST request to add a new post to Posts array
    async newPost(text) {
        await myFetch('/social/newpost', {text});
    },
    //POST request to like a post
    async likePost(index) {
        await myFetch('/social/upvote', {index});
    },
    //POST request to dislike a post
    async dislikePost(index) {
        await myFetch('/social/downvote', {index});
    }
}