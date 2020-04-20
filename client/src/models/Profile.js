import myFetch from "./myFetch";

export let State = {};

export function Init(){
  myFetch('/profile')
      .then(x=> { 
          State = x;
          console.log(x);
      });
}