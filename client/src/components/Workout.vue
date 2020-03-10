<template>
    <div class="workout notification">
    <h1 class="title has-text-centered">Excercise Log</h1>
    <nav class="level">
        <div class="level-item has-text-centered">
        <div class="field is-horizontal">
            <label class="field-label">Sets</label>
            <div class="control">
                <input type="number" placeholder="0">
            </div>
        </div>
        </div>

        <div class="level-item has-text-centered">
        <div class="field is-horizontal">
            <label class="field-label">Weight</label>
            <div class="control">
                <input type="number" placeholder="0">
            </div>
        </div>
        </div>
    </nav>
    <h2 class="subtitle is-5 has-text-centered">Use the timer to keep track of your breaks</h2>
    <Countdown></Countdown>
    <div class="notification has-text-centered">
        Finished? Submit results to your profile
        <br>
        <button class="button is-success">Submit</button>
    </div>
    </div>
</template>

<script>
import Countdown from "@/components/Countdown.vue";
export default {
    components: {
        Countdown
    }
}
</script>

<style>

</style>