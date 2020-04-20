import myFetch from "./myFetch";

export let CurrentUser =  null;

export async function Login(username, password) {
    const user = await myFetch('/users/login', { username, password }) ;

    return CurrentUser = user;
}