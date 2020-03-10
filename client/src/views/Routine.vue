<template>
  <div class="routine">
      <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <span class="icon">
                <i class="fas fa-dumbbell"></i>
            </span>
            Excerise Routine
            <button class="button is-danger" @click="isAdmin = !isAdmin">Toggle between Admin and User</button>
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
        <div class="columns is-multiline">
            <!--Admin card seperate from the v-for to generate the cards due to have an unique @click button-->
            <div class="column is-one-quarter">
                <div class="card-image">
                <div class="card">
                    <figure class="image is-square">
                    <img src="../assets/plussign.png" alt="image">
                    </figure>
                </div>
                <header class="card-header">
                    <p class="card-header-title">
                    New Routine
                    </p>
                    <a class="card-header-icon" aria-label="more options" @click="adminCard = !adminCard">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </a>
                </header>
                <div class="card-content" v-if="adminCard">
                    <ul>
                        <li>Only Admins may add new routines</li>
                        <li><button class="button is-info is-small" @click="isForm = !isForm" v-if="isAdmin">Start</button></li>
                    </ul>
                </div>
                </div>
            </div>
            <!--Use v-for to generate all the routine cards-->
            <div class="column is-one-quarter" v-for="(card,i) in cards" :key="card.title">
                <div class="card-image">
                <div class="card">
                    <figure class="image is-square">
                    <img :src="card.photo" alt="image">
                    </figure>
                </div>
                <header class="card-header">
                    <p class="card-header-title">
                    {{card.title}}
                    </p>
                    <a href="#" class="card-header-icon" aria-label="more options" @click="remove(i)" v-if="isAdmin">
                    <span class="icon">
                        <i class="delete" aria-hidden="true"></i>
                    </span>
                    </a>
                    <a class="card-header-icon" aria-label="more options" @click="card.isOpen = !card.isOpen">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </a>
                </header>
                <div class="card-content" v-if="card.isOpen">
                    <ul>
                        <li v-for="exercise in card.exercises" :key="exercise">{{exercise}}</li>
                        <li><button class="button is-info is-small" @click="isLog = !isLog">Start</button></li>
                    </ul>
                </div>
                </div>
            </div>

        </div>
    </section>

    <!--Modal for the adminCard only. Form to push new routine card-->
    <div class="modal" :class="{'is-active': isForm}">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            
            <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="Title" v-model="newTitle">
            </div>
            <p class="help">Enter Rountine Title</p>
            </div>

            <div class="field">
            <label class="label">Photo URL</label>
            <div class="control">
                <input class="input" type="text" v-model="newPhoto">
            </div>
            <p class="help">Enter the web address of an img/png file</p>
            </div>

            <div class="field">
            <label class="label">Excerise 1</label>
            <div class="control">
                <input class="input" type="text" v-model="newExcer1">
            </div>
            <p class="help">Enter the name of the excercise</p>
            </div>

            <div class="field">
            <label class="label">Excerise 2</label>
            <div class="control">
                <input class="input" type="text" v-model="newExcer2">
            </div>
            <p class="help">Enter the name of the excercise</p>
            </div>

            <div class="field">
            <label class="label">Excerise 3</label>
            <div class="control">
                <input class="input" type="text" v-model="newExcer3">
            </div>
            <p class="help">Enter the name of the excercise</p>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" @click="add">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light" @click="clear">Cancel</button>
                </div>
            </div>

        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="isForm = !isForm"></button>
    </div>

    <!-- Modal to get to timer. This is for all cards besides the admin/add card-->
    <div class="modal" :class="{'is-active': isLog}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <Workout></Workout>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="isLog = !isLog"></button>
    </div>
  </div>

</template>

<script>
import Workout from "@/components/Workout.vue";

export default {
    data: () => ({
        cards: [
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
        ],
        //for adminCard and access to admin features
        adminCard: false,
        isAdmin: true,
        //booleans to access modals on this page
        isLog: false,
        isForm: false,
        //v-model elements for admin form to add routines
        newTitle: "",
        newPhoto: "",
        newExcer1: "",
        newExcer2: "",
        newExcer3: ""
    }),
    methods: {
        remove(i){
          this.cards.splice(i, 1);
        },
        add() {
          this.cards.push(
              { 
                title: this.newTitle,
                photo: this.newPhoto,
                isOpen: false,
                exercises: [this.newExcer1, this.newExcer2, this.newExcer3]
              }
            )
        },
        clear() {
            this.newTitle = "",
            this.newPhoto = "",
            this.newExcer1 = "",
            this.newExcer2 = "",
            this.newExcer3 = ""
        }
    },
    components: {
        Workout
    }
}
</script>

<style>

</style>