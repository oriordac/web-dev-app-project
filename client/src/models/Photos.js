export const Photos = [
    {
        PhotoID: 0,
        PhotoImage: "../assets/mohonk.jpg",
        LocationName: "Mohonk Preserve",
    },
    {
        PhotoID: 1,
        PhotoImage: "../assests/minnewaska.jpg",
        LocationName: "Minnewaska State Park Preserve"
    }
];

export function updatePhoto(photoImage) {
    this.image = photoImage
  };

export function updateText(LocationName) {
    this.LocationName = LocationName
  }