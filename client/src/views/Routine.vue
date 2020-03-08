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
            </h1>
        </div>
    </div>
    </section>
    <section class="section">
        <table class="table is-bordered is-fullwidth">
            <thead>
                <tr>
                    <th>Routine</th>
                    <th colspan="4">Excerise</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(x, i) in todos" :key="x.ID">
                    <td>
                        <button class="delete" @click="remove(i)" v-if="isAdmin"></button>
                        {{x.title}}
                    </td>
                    <td>{{x.excer1}}</td>
                    <td>{{x.excer2}}</td>
                    <td>{{x.excer3}}</td>
                    <td class="button is-fullwidth" @click="isLog = !isLog">Start</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section class="section">
        <div class="notification">
            <p class="content">
                Are you an admin? You can add excercises to this list
            </p>
            <button class="button is-link" @click="isOpen = !isOpen">New Routine</button>
        </div>
    </section>

    <div class="modal" :class="{'is-active': isOpen}">
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
    <button class="modal-close is-large" aria-label="close" @click="isOpen = !isOpen"></button>
    </div>

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
        isOpen: false,
        isLog: false,
        isAdmin: true,
        todos: [
            {
                ID: 0,
                title: "Back",
                excer1: "Rows",
                excer2: "Angel Rows",
                excer3: "Dumbbell Row"
            },
            {
                ID: 1,
                title: "Biceps",
                excer1: "Dumbbell Curls",
                excer2: "Hammer Curls",
            },
            {
                ID: 2,
                title: "Chest",
                excer1: "Barbbell Bench Press",
                excer2: "Incline Bench Press",
            },
            {
                ID: 3,
                title: "Shoulder",
                excer1: "Barvell Shoulder Press",
                excer2: "Dumbbell Shoulder Press",
            },
            {
                ID: 4,
                title: "Triceps",
                excer1: "Dumbbell Kickbacks",
                excer2: "Dumbbell Tricep Press",
            },
            {
                ID: 5,
                title: "Legs",
                excer1: "Deadlift",
                excer2: "Squat",
                excer3: "Leg Curls"
            }
        ],
        newTitle: "",
        newExcer1: "",
        newExcer2: "",
        newExcer3: ""
    }),
    methods: {
        remove(i){
          this.todos.splice(i, 1);
        },
        add() {
          this.todos.push(
              { 
                title: this.newTitle,
                excer1: this.newExcer1,
                excer2: this.newExcer2,
                excer3: this.excer3
              }
            )
        },
        clear() {
            this.newTitle = "",
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