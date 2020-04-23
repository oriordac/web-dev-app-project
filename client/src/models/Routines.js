import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/routines')
            .then(x=> { 
                this.State = {...x, Routines: x.Routines.map(r => ({...r, isOpen: false }) )};
                console.log(x);
            });
    }
}