import myFetch from "./myFetch";

export let State = {};

export function Init(){
    //need to pass an empty string to mirror the homepage
    myFetch("")
        .then(x=> { 
            State = x;
            console.log(x);
        });
}