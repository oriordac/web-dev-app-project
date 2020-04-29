import myFetch from "./myFetch";

export default {
    State: {},
    Init(){
        myFetch('/social')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    },
    //POST request to add a new post to Posts array
    async newPost(text) {
        await myFetch('/social/newpost', {text});
    },
}