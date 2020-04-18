const Profile = [
    {
        UserId: 0, 
        Name: "Thor Odinson", 
        Handle: "odinson", 
        Image: "http://cs.newpaltz.edu/~oriordac1/assets/thorodinson.jpg",
        Age: 20, 
        Height: 180, 
        Weight: 200, 
        Sex: "Male", 
        Description:"Member of the Avengers. Part-time member of the Guardians of the Galaxy"},
    {
        UserId: 1, 
        Name: "Odin Allfather", 
        Handle: "allfather",
        Image: "http://cs.newpaltz.edu/~oriordac1/assets/odinallfather.png",
        Age: 40, 
        Height: 170, 
        Weight: 170, 
        Sex: "Male",
        Description: "Made Eye-patches fashionable"
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
    }
];

function editProfile(userid, newAge, newHeight, newWeight, newDescription) {
    const user = Profile.find(x=> x.UserId == userid);
    console.log(user);
    user.Age = newAge;
    user.Height = newHeight;
    user.Weight = newWeight;
    user.Description = newDescription;
};

function editGoals(userid, newFocus, newStep, newWeight) {
    const user = Goals.find(x=> x.UserId == userid);
    user.Focus = newFocus;
    user.StepGoal = newStep;
    user.WeightGoal = newWeight;
};

module.exports = {
    Profile, Goals,
    editProfile, editGoals
}