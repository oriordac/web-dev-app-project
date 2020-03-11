const Users = [
    {Name: "Thor Odison", Password:"Mjolnir", Email:"odinson@asgard.com"},
    {Name: "Odin Allfather", Password: "Gungnir", Email: "allfather@asgard.com"}
];

export let CurrentUser =  null;

export function Login(username, password) {
    const user = Users.find(x=> x.Name == username);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}