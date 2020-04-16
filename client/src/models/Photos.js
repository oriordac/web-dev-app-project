import myFetch from "./myFetch";

function updatePhoto(photoImage) {
    this.image = photoImage
  };
function updateText(LocationName) {
    this.text = LocationName
  }

export let State = {};

export function Init(){
  myFetch('http://localhost:3000/test')
      .then(x=> { 
          State = x;
          console.log(x);
      });
}