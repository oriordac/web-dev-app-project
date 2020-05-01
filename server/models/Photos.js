const Photos = [
    {
        PhotoID: 0,
        PhotoImage: "http://cs.newpaltz.edu/~oriordac1/assets/mohonk.jpg",
        LocationName: "Mohonk Preserve",
    },
    {
        PhotoID: 1,
        PhotoImage: "http://cs.newpaltz.edu/~oriordac1/assets/minnewaska.jpg",
        LocationName: "Minnewaska State Park Preserve"
    },
    {
        PhotoID: 2,
        PhotoImage: "http://cs.newpaltz.edu/~oriordac1/assets/adirondack.jpg",
        LocationName: "Adirondack Trail"
    },
    {
        PhotoID: 3,
        PhotoImage: "http://cs.newpaltz.edu/~oriordac1/assets/appalachian.jpg",
        LocationName: "Appalachian Trail"
    }
];

function addPhoto(photoimage, locationname) {
    Photos.push({
        PhotoID: Photos.length,
        PhotoImage: photoimage,
        LocationName: locationname
    })
}

function updatePhoto(photoImage) {
    this.image = photoImage
  };

function updateText(LocationName) {
    this.text = LocationName
  }

  module.exports = {
      Photos,
      addPhoto
  }