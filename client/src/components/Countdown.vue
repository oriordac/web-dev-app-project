<template>
    <section id="Countdown">
        <div class=" box has-text-centered">
        
            <h2 class="title is-6">{{title}}</h2>
            
            <div>
                <span id="minutes">{{ minutes }}</span>
                <span id="middle">:</span>
                <span id="seconds">{{ seconds }}</span>
            </div>

            <div class="buttons">
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
    </section>
</template>

<script>
export default {
    data: () => ({
        timer: null,
        totalTime: (25 * 60),
        resetButton: false,
        title: "Let the countdown begin!!"
    }),
    methods: {
        startTimer: function() {
            this.timer = setInterval(() => this.countdown(), 1000);
            this.resetButton = true;
            this.title = "Greatness is within sight!!"
        },

        stopTimer: function() {
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
            this.title = "Never quit, keep going!!"
        },

        resetTimer: function() {
            this.totalTime = (25 * 60);
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = false;
            this.title = "Let the countdown begin!!"
        },

        padTime: function(time) {
            return (time < 10 ? '0' : '') + time;
        },

        countdown: function() {
            if(this.totalTime >= 1){
                this.totalTime--;
            } else{
                this.totalTime = 0;
                this.resetTimer()
            }
        }
    },

    computed: {
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