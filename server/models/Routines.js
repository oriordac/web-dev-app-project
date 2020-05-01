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

function remove(index) {
    this.Routines.splice(index, 1);
    return true;
};

function add(newTitle, newPhoto, newExer1, newExer2, newExer3) {
    this.Routines.push(
        { 
        title: newTitle,
        photo: newPhoto,
        isOpen: false,
        exercises: [newExer1, newExer2, newExer3]
        }
    );
    return this.Routines[this.Routines.length - 1]
};

module.exports = {
    Routines,
    remove, add
}
