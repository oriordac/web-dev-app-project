<template>
    <section id="Timer">
        <div class="box has-text-centered has-background-dark">
            
            <div class="title is-2">
                <span id="hours">{{ hours }}</span>
                <span id="middle">:</span>
                <span id="minutes">{{ minutes }}</span>
                <span id="middle">:</span>
                <span id="seconds">{{ seconds }}</span>
            </div>
            <br>
            <div class="level">
                <div class="level-item buttons has-text-centered">
                    <!--Start Timer -->
                    <button class="button is-dark" v-if="!timer" @click="startTimer">
                        <span class="icon">
                            <i class="far fa-play-circle"></i>
                        </span>
                    </button>
                    <!--Pause Timer -->
                    <button class="button is-dark" v-if="timer" @click="stopTimer">
                        <span class="icon">
                            <i class="far fa-pause-circle"></i>
                        </span>
                    </button>
                    <!--Restart Timer -->
                    <button class="button is-dark" v-if="resetButton" @click="resetTimer">
                        <span class="icon">
                            <i class="fas fa-undo"></i>
                        </span>
                    </button>
                </div>
            </div>
        
        </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        timer: null,
        totalTime: (0),
        resetButton: false,
        title: "Let the countdown begin!!"
    }),
    methods: {
        startTimer: function() {
            this.timer = setInterval(() => this.countdown(), 1000);
            this.resetButton = true;
        },

        stopTimer: function() {
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
        },

        resetTimer: function() {
            this.totalTime = (0);
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = false;
        },

        padTime: function(time) {
            return (time < 10 ? '0' : '') + time;
        },
        countdown: function() {
            if(this.totalTime <= (3*60*60)){
                this.totalTime++;
            } else{
                this.totalTime = 0;
                this.resetTimer()
            }
        }
    },

    computed: {
        hours: function() {
            const hours = Math.floor(this.totalTime / 3600);
            return hours;
        },
        minutes: function() {
            const minutes = Math.floor(this.totalTime / 60);
            return this.padTime(minutes);
        },
        seconds: function() {
            const seconds = this.totalTime - (this.minutes * 60);
            return this.padTime(seconds);
        }
    }
}
</script>
    
<style>

</style>