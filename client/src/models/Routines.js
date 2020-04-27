import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/routines')
            .then(x=> { 
                this.State = {...x, Routines: x.Routines.map(r => ({...r, isOpen: false }) )};
                console.log(x);
            });
    },
    //POST request to add a new exercise to State
    async add(newTitle, newPhoto, newExer1, newExer2, newExer3) {
        await myFetch('/routines/add', {newTitle, newPhoto, newExer1, newExer2, newExer3});
    },
    //POST request to remove an excercise from State
    async remove(index) {
        await myFetch('/routines/remove', {index});
    }
}
