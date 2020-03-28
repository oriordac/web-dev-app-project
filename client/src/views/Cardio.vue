<template>
    <div class="cardio">

    <div class="search-box">
        <input type="text" placeholder="Search..." v-model="query" @keypress="fetchWeather" />
    </div>

    <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
            <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
            <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
            <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
            <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        query: "",
        weather: {},
        api_key: "d64fded4f2f41dd455fcb03f91a6ea3e",
        url_base: "http://api.openweathermap.org/data/2.5/"
    }),
    methods: {
        fetchWeather (e) {
            if (e.key == "Enter") {
                axios.get(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(res => {
                    return res.data;
                }).then(this.setResults);
            }
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
        }
    }
}
</script>

<style>

</style>