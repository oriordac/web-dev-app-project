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
    //POST request to add a new routine to State.Routines
    async add(newTitle, newPhoto, newExer1, newExer2, newExer3) {
        await myFetch('/routines/add', {newTitle, newPhoto, newExer1, newExer2, newExer3});
    },
    //POST request to remove an excercise from State
    async remove(index) {
        await myFetch('/routines/remove', {index});
    },
    //POST request to add a new exercise log to State.Profile
    async addExercise(date, type, duration, calories) {
        await myFetch('/profile/addexercise', {date, type, duration, calories});
    }
}
