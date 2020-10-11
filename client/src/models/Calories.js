import myFetch from "./myFetch";

export default {
    State: {},
    Init() {
        myFetch('/calories')
            .then(x=> { 
                this.State = {...x};
            });
    },
    //GET request for Final
    filter(name) {
        return myFetch(`/calories/foodname?name=${name}`);
    },
    //POST request to add new Calories array
    async add(date, newFoodName, newCalorie, newProtein, newCarbs, newFat) {
        await myFetch('/calories/add', {date, newFoodName, newCalorie, newProtein, newCarbs, newFat});
    },
    //POST request to add edit nutirents on display
    async addnutrients(newCalorie, newProtein, newCarbs, newFat) {
        await myFetch('/calories/addnutrients', {newCalorie, newProtein, newCarbs, newFat});
    }
}
