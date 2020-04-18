const Users = [
    {Name: "Thor Odinson", Password:"Mjolnir", Email:"odinson@asgard.com", Userid: 0},
    {Name: "Odin Allfather", Password: "Gungnir", Email: "allfather@asgard.com", Userid: 1}
];

module.exports = {
    
    Login(username, password) {
        const user = Users.find(x=> x.Name == username);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');

        return user;
    },

    Get: userid => Users[userid]

}