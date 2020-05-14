import myFetch from "./myFetch";

export default {
    State: {},
    Init(){
        //need to pass an empty path to mirror the homepage
        myFetch("/final")
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    }

}