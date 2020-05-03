import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/liquid')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    },
    //These POST requests have no body, but the myfetch must be told so by {} as the second parameter
    async add8() {
        await myFetch('/liquid/add8', {});
    },
    async add16() {
        await myFetch('/liquid/add16', {});
    },
    async add32() {
        await myFetch('/liquid/add32', {});
    }
    
}