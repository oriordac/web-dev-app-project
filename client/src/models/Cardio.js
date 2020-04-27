import myFetch from "./myFetch";

export default {
    //POST request to add a new exercise to State
    async add(date, type, duration, calories) {
        await myFetch('/profile/addexercise', {date, type, duration, calories});
    }
}
