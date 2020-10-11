import myFetch from "./myFetch";

export default {
    State: {},
    Init(){
        myFetch('/social')
            .then(x=> { 
                this.State = {...x, Social: x.Social.map(r => ({...r, showComments: false}) )}
            });
    },
    //POST request to add a new post to Posts array
    async newPost(text) {
        await myFetch('/social/newpost', {text});
    },
    async newComment(index, text) {
        await myFetch('/social/newcomment', {index, text});
    },
    //POST request to like a post
    async likePost(index) {
        await myFetch('/social/likepost', {index});
    },
    async likeComment(postindex, commentindex) {
        await myFetch('/social/likecomment', {postindex, commentindex});
    }
}