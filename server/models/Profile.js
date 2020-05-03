const Profile = [
    {
        UserId: 0, 
        Name: "Thor Odinson", 
        Handle: "odinson", 
        Image: "http://cs.newpaltz.edu/~oriordac1/assets/thorodinson.jpg",
        Age: 20, 
        Height: 180, 
        Weight: 200, 
        Description:"Member of the Avengers. Part-time member of the Guardians of the Galaxy"
    },
    {
        UserId: 1, 
        Name: "Odin Allfather", 
        Handle: "allfather",
        Image: "http://cs.newpaltz.edu/~oriordac1/assets/odinallfather.png",
        Age: 40, 
        Height: 170, 
        Weight: 170, 
        Description: "Made Eye-patches fashionable"
    },
    {
        UserId: 2, 
        Name: "Valkyrie", 
        Handle: "valhalla",
        Image: "http://cs.newpaltz.edu/~oriordac1/assets/valkyrie.jpg",
        Age: 25, 
        Height: 165, 
        Weight: 120,
        Description: "Parties all night within the halls of Valhalla"
    },
    {
        UserId: 3, 
        Name: "Loki Laufeyson", 
        Handle: "silvertongue",
        Image: "http://cs.newpaltz.edu/~oriordac1/assets/loki.jpg",
        Age: 20, 
        Height: 172, 
        Weight: 150, 
        Description: "Plotting revenge on all of my enemies"
    }
];

const Goals = [
    {
        UserId: 0,
        Focus: "Strength Training",
        StepGoal:8000,
        WeightGoal: 225
    },
    {
        UserId: 1,
        Focus: "Maintence",
        StepGoal: 4000,
        WeightGoal: 170
    },
    {
        UserId: 3,
        Focus: "Strength Training",
        StepGoal: 7000,
        WeightGoal: 125
    },
    {
        UserId: 4,
        Focus: "Cardio Training",
        StepGoal: 10000,
        WeightGoal: 150
    }
];

const Exercises = [
    {
        UserId: 0, 
        Exercise: [
            ["14:00 - 24 Apr", "Biceps", "0:30", 100],
            ["09:30 - 25 Apr", "Running", "0:45", 250]
        ]
    },
    {
        UserId: 1,
        Exercise: [
            ["16:00 - 20 Apr", "Back", "1:00", 225],
            ["07:30 - 19 Apr", "Rowing", "2:00", 350]
        ]
    },
    {
        UserId: 2,
        Exercise: [
            ["16:00 - 20 Apr", "Back", "1:00", 225],
            ["07:30 - 19 Apr", "Rowing", "2:00", 350]
        ]
    },
    {
        UserId: 3,
        Exercise: [
            ["16:00 - 20 Apr", "Back", "1:00", 225],
            ["07:30 - 19 Apr", "Rowing", "2:00", 350]
        ]
    }     
];

function editProfile(userid, newAge, newHeight, newWeight, newDescription) {
    const user = Profile.find(x=> x.UserId == userid);
    console.log(user);
    user.Age = newAge;
    user.Height = newHeight;
    user.Weight = newWeight;
    user.Description = newDescription;
    return user;
};

function editGoals(userid, newFocus, newStep, newWeight) {
    const user = Goals.find(x=> x.UserId == userid);
    user.Focus = newFocus;
    user.StepGoal = newStep;
    user.WeightGoal = newWeight;
    return user;
};

function addExercise(userid, date, type, duration, calories) {
    const user = Exercises.find(x=> x.UserId == userid);
    user.Exercise.push([date, type, duration, calories]);
    return true;
}

function getUser(token) {
    //we want to use the bearer token to find the corresponding userId property in Users
    return Profile.findIndex(x=> x.UserId == token)
}

module.exports = {
    Profile, Goals, Exercises,
    editProfile, editGoals, addExercise, getUser
}