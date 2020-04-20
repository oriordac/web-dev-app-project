import myFetch from "./myFetch";

export let CurrentUser =  null;

export async function Login(username, password) {
    const user = await myFetch('/users/login', { username, password }) ;
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}