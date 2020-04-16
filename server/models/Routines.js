const Routines =  [
    {
        title: "Back",
        photo: "http://cs.newpaltz.edu/~oriordac1/assets/back.jpg",
        isOpen: false,
        exercises: [ "Row", "Angle Row", "Dumbbell Row" ]
    },
    {
        title: "Biceps",
        photo: "http://cs.newpaltz.edu/~oriordac1/assets/bicep.jpg",
        isOpen: false,
        exercises: [ "Dumbbell Bicep Curl", "Hammer Curl" ]
    },
    {
        title: "Chest",
        photo: "http://cs.newpaltz.edu/~oriordac1/assets/chest.jpg",
        isOpen: false,
        exercises: [ "Barbell Bench Press", "Incline Bench Press" ]
    },
    {
        title: "Shoulders",
        photo:"http://cs.newpaltz.edu/~oriordac1/assets/shoulder.jpg",
        isOpen: false,
        exercises: [ "Barbell Shoulder Press", "Dumbbell Shoulder Press" ]
    },
    {
        title: "Triceps",
        photo: "http://cs.newpaltz.edu/~oriordac1/assets/tricep.jpg",
        isOpen: false,
        exercises: [ "Dumbbell Kickbacks", "Seated Tricep Press" ]
    },
    {
        title: "Legs",
        photo: "http://cs.newpaltz.edu/~oriordac1/assets/legs.jpg",
        isOpen: false,
        exercises: [ "Deadlift", "Squat", "Leg Curl" ]
    },
];

function remove(i) {
    this.Routines.splice(i, 1);
};

function add(newTitle, newPhoto, newExcer1, newExcer2, newExcer3) {
    this.Routines.push(
        { 
        title: newTitle,
        photo: newPhoto,
        isOpen: false,
        exercises: [newExcer1, newExcer2, newExcer3]
        }
    )
};

module.exports = {
    Routines,
    remove, add
}