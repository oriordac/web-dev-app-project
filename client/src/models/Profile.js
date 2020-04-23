import myFetch from "./myFetch";

export default {
    State: {},
    Init(){
        myFetch('/profile')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
      }
}