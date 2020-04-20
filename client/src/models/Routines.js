import myFetch from "./myFetch";

export let State = {};

export function Init(){
    myFetch('/routines')
        .then(x=> { 
            State = x;
            console.log(x);
        });
  }