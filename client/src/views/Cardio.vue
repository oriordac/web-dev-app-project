<template>
    <div class="cardio">
    <section class="hero is-danger is-bold is-fullheight">
        <div class="hero-body" style="display: inline-block;">
            <div class="title has-text-centered">Cardio</div>
            <div class="container level-item">
                <div class="box">

                    <label class="label">Local Weather</label>
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input" type="text" placeholder="Search..." v-model="query">
                        </div>
                        <div class="control">
                            <a class="button is-danger is-outlined" @click="fetchWeather">
                            Search
                            </a>
                        </div>
                    </div>

                    <transition name="fade">
                    <div class="notification has-text-centered has-background-dark has-text-white" v-if="typeof weather.main != 'undefined'">
                        <div class="level-item title">{{ weather.name }}, {{ weather.sys.country }}</div>
                        <p class="level-item content">{{ dateBuilder() }}</p>
                        <hr>
                        <div class="level-item title is-4">{{ Math.round(weather.main.temp) }}°F</div>
                        <div class="level-item">{{ weather.weather[0].main }}</div>
                    </div>
                    </transition>

                    <label class="label">Type of Cardio</label>
                    <div class="field">
                        <div class="select is-danger">
                        <select v-model="type">
                            <option>Hiking</option>
                            <option>Running</option>
                            <option>Walking</option>
                            <option>Cycling</option>
                            <option>Rowing</option>
                        </select>
                        </div>
                    </div>

                    <label class="label">Calories</label>
                    <div class="field">
                        <div class="control">
                            <input class="input is-danger" type="number" placeholder="0" v-model.number="calories">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-danger" @click="addExercise();isSubmitted()">Submit</button>
                        </div>
                        <p v-if="Submitted">Submitted!</p>
                    </div>

                    <Timer v-on:send-time="setTime"></Timer>

                    

                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import axios from 'axios'
import Timer from "@/components/Timer.vue";
import Cardio from "@/models/Cardio";

export default {
    components: {
        Timer
    },
    data: () => ({
        Cardio,
        //Needed for weather portion
        query: "",
        weather: {},
        api_key: "d64fded4f2f41dd455fcb03f91a6ea3e",
        url_base: "http://api.openweathermap.org/data/2.5/",
        //Needed to submit exercise
        type: "",
        calories: 0,
        hours: "",
        minutes: "",
        seconds: "",
        //Inform user that POST submission was successful
        Submitted: false
    }),
    methods: {
         //For weather portion
        fetchWeather () {
            axios.get(`${this.url_base}weather?q=${this.query}&units=imperial&APPID=${this.api_key}`)
            .then(res => {
                return res.data;
            }).then(this.setResults);
        },
        setResults (results) {
            this.weather = results;
        },
        dateBuilder () {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            return `${day} ${date} ${month} ${year}`;
        },
        //For exercise portion
        shortDateBuilder () {
            let d = new Date();
            let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let starthour = d.getHours() - this.hours;
            let startminute = d.getMinutes() - this.minutes;
            return `${starthour}:${startminute} - ${date} ${month}`;
        },
        setTime(hours, minutes, seconds) {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        },
        async addExercise() {
            try {
                let date = this.shortDateBuilder();
                let time = `${this.hours}:${this.minutes}:${this.seconds}`;
                await Cardio.add(date, this.type, time, this.calories);
            } catch(error) {
                this.error = error
            }
        },
        isSubmitted() {
            this.Submitted = !this.Submitted
        }
    }
}
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-to, .fade-leave-to {
        transition: opacity 2s ease-out;
    }
    .fade-leave {
        opacity: 0;
    }
</style>
