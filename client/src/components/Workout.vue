<template>
    <div class="workout notification">
    <h1 class="title has-text-centered">Exercise Log</h1>

    <label class="label">Workout</label>
    <div class="field">
        <div class="select">
        <select v-model="type">
            <option v-for="workout in Routines.State.Routines" :key="workout.title">
                {{ workout.title }}
            </option>
        </select>
        </div>
    </div>

    <label class="label">Calories</label>
    <div class="field">
        <div class="control">
            <input class="input" type="number" placeholder="0" v-model.number="calories">
        </div>
    </div>

    <label class="label">Duration - Hours</label>
    <div class="field">
        <div class="control">
            <input class="input" type="number" placeholder="0" v-model.number="hours">
        </div>
    </div>

    <label class="label">Duration - Minutes</label>
    <div class="field">
        <div class="control">
            <input class="input" type="number" placeholder="0" v-model.number="minutes">
        </div>
    </div>
             
    <h2 class="subtitle is-5 has-text-centered">Use the timer to keep track of your breaks</h2>
    <Countdown></Countdown>
    <div class="notification has-text-centered">
        Finished? Submit results to your profile
        <br>
        <button class="button is-success" @click="add();isSubmitted()">Submit</button>
        <p v-if="Submitted">Thank you for your submission! See your results under your profile</p>
    </div>
    </div>
</template>

<script>
import Countdown from "@/components/Countdown.vue";

import Routines from "../models/Routines";

export default {
    data: () => ({
        Routines,
        type: "",
        calories: 0,
        hours: 0,
        minutes: 0,
        Submitted: false
    }),
    methods: {
        add() {
            let padedMinutes = this.padTime(this.minutes);
            this.$emit('add-exercise', this.hours, padedMinutes, this.type, this.calories);
        },
        isSubmitted() {
            this.Submitted = !this.Submitted
        },
        padTime: function(time) {
            return (time < 10 ? '0' : '') + time;
        },
    },
    components: {
        Countdown
    }
}
</script>

<style>

</style>
