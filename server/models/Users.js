const axios = require('axios').default;

const liquid = require('./Liquid');
const profile = require('./Profile');
const calories = require('./Calories');

const Users = [
    {Name: "Thor Odinson", Password:"Mjolnir", Email:"odinson@asgard.com", Admin: false, userId: 0},
    {Name: "Odin Allfather", Password: "Gungnir", Email: "allfather@asgard.com", Admin: true, userId: 1},
    {Name: "Valkyrie", Password: "Einherjar", Email: "valkryie@asgard.com", Admin: true, userId: 2},
    {Name: "Loki Laufeyson", Password: "Sigyn", Email: "loki@asgard.com", Admin: false, userId: 3},
];

function getOrCreate(response){
    console.log(response.data);
    let user = Users.find(x => x.Email == response.data.email);
    //look at this later for signin and login
    if(!user){
        Users.push({ Name: response.data.name, Password: null, Email: response.data.email, Admin: false, userId: Users.length });
        user = Users[Users.length - 1];

        liquid.Liquid.push({UserId: Users.length - 1, Water: 0});
        profile.Profile.push({ 
            UserId: Users.length - 1, 
            Name: response.data.name, 
            Handle: "confier", 
            Image: response.data.picture, 
            Age: 23, 
            Height: 180, 
            Weight: 200, 
            Description: "A student"
        });
        profile.Goals.push({
            UserId: Users.length - 1,
            Focus: "Maintence",
            StepGoal: 7000,
            WeightGoal: 200
        });
        profile.Exercises.push({
            UserId: Users.length - 1, 
            Exercise: [
                ["14:00 - 24 Apr", "Biceps", "0:30", 100],
                ["09:30 - 25 Apr", "Running", "0:45", 250]
            ]
        });
        calories.Calories.push({
                UserId: Users.length -1 ,
                Calories: [
                    ["18 April 2020", "Sample", 0, 0, 0, 0]
                ],
                CalorieCount: 0,
                ProteinCount: 0,
                CarbsCount: 0,
                FatCount: 0
        })

    }
    // no need to check password. We got the email address directly from an oauth provider
    return user;

}

module.exports = {
    Users,
    async Login(username, password) {

        let response;
        switch (username) {
            case "google":
                // You can also try https://people.googleapis.com/v1/people/me for more information
                response = await axios.get("https://www.googleapis.com/userinfo/v2/me", { headers: { Authorization: `Bearer ${password}` } })
                return getOrCreate(response);

            case "facebook":
                response = await axios.get(`https://graph.facebook.com/v3.0/me?fields=id,email,name,picture&access_token=${password}`);
                return getOrCreate(response);

            default:
                const user = Users.find(x=> x.Name == username);
                if(!user) throw Error('User not found');
                if(user.Password != password) throw Error('Wrong Password');
                return user;
        }
    },
    checkAdminStatus: userid => Users[userid].Admin

}