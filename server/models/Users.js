const Users = [
    {Name: "Thor Odinson", Password:"Mjolnir", Email:"odinson@asgard.com", Admin: false, userId: 0},
    {Name: "Odin Allfather", Password: "Gungnir", Email: "allfather@asgard.com", Admin: true, userId: 1},
    {Name: "Valkyrie", Password: "Einherjar", Email: "valkryie@asgard.com", Admin: true, userId: 2},
    {Name: "Loki Laufeyson", Password: "Sigyn", Email: "loki@asgard.com", Admin: false, userId: 3},
];

module.exports = {
    
    Login(username, password) {
        const user = Users.find(x=> x.Name == username);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');

        return user;
    },
    checkAdminStatus: userid => Users[userid].Admin

}