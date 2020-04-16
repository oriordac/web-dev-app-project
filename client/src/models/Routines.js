import myFetch from "./myFetch";

export let State = {};

export function Init(){
    myFetch('http://localhost:3000/routines')
        .then(x=> { 
            State = x;
            console.log(x);
        });
  }