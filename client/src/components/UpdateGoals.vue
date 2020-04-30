<template>
<div class="modal" :class="{'is-active':isOpenGoal}">
    <div class="modal-background"></div>
    <div class="modal-content">

        <div class="container">
        <div class="box">
            <h1 class="title">Change Goals</h1>
            <div class="field">
                <label class="label">Focus</label>
                <p class="control">
                    <span class="select">
                    <select v-model="newfocus">
                        <option selected>Weight Lost</option>
                        <option>Weight Gain</option>
                        <option>Maintence</option>
                        <option>Strength Training</option>
                        <option>Cardio Training</option>
                    </select>
                    </span>
                </p>
            </div>

            <div class="field">
                <label class="label">Weight Goal</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="number" v-model.number="newgoalweight">
                    <span class="icon is-small is-left">
                        <i class="fas fa-weight"></i>
                    </span>
                    <p class="help is-dark">Enter your desired weight</p>
                </div>
            </div>
            
            <div class="field">
                <label class="label">Steps Goal</label>
                <div class="control has-icons-left">
                <input class="input" type="number" v-model.number="newgoalsteps">
                <span class="icon is-small is-left">
                    <i class="fas fa-shoe-prints"></i>
                </span>
                </div>
                <p class="help is-dark">Enter your average steps goal</p>
            </div>
            
            <div class="field is-grouped">
                <div class="control">
                <button class="button is-info" @click="updateGoals()">Submit</button>
                </div>
            </div>

        </div> <!--End of box-->
        </div> <!--End of container-->

    </div> <!--End of Modal Content-->
    <button class="modal-close is-large" aria-label="close" @click="closeGoals()"></button>
</div>
</template>

<script>
import Profile from "@/models/Profile";

export default {
    props: ["isOpenGoal"],
    data: () => ({
        Profile,
        newfocus: "",
        newgoalweight: 0,
        newgoalsteps: 0,
    }),
    methods: {
        async updateGoals() {
            //update server state
            try {
                await Profile.editGoals(this.newfocus, this.newgoalsteps, this.newgoalweight)
            } catch (error) {
                this.error = error;
            }
            //update Vue instance
            this.$emit('update-goals', this.newfocus, this.newgoalweight, this.newgoalsteps);
            this.$emit('close-goals', this.isOpenGoal);
        },
        closeGoals() {
            this.$emit('close-goals', this.isOpenGoal);
        }
    }
}
</script>

<style>

</style>