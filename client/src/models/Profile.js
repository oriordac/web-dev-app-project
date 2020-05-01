import myFetch from "./myFetch";

export default {
    State: {},
    Init(){
        myFetch('/profile')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    },
    async editProfile(age, height, weight, description) {
        await myFetch('/profile/editprofile', {age, height, weight, description});
    },
    async editGoals(focus, steps, weight) {
        await myFetch('/profile/editgoals', {focus, steps, weight});
    }
}