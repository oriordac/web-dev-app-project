<template>
  <div class="profile">
      <section class="hero is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <span class="icon">
                <i class="fas fa-user-cog"></i>
            </span>
            User Profile
          </h1>
        </div>
      </div>
    </section>
    <section class="section">
        <div class="columns">
            <!--First Column with ID Card-->
            <div class="column is-one-third">
                <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img :src="image" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{ name }}</p>
                            <p class="subtitle is-6">@{{ handle }}</p>
                        </div>
                        <div class="media-right">
                            <span class="button icon" @click="profileModal()">
                                <i class="fas fa-cog"></i>
                            </span>
                        </div>
                    </div>

                    <div class="content">
                        <h1 class="title is-6">Description</h1>
                        <p>{{ description }}</p>
                    </div>
                </div>

                <footer class="card-footer">
                    <p class="card-footer-item">{{ age }} years</p>
                    <p class="card-footer-item">{{ height }} cm</p>
                    <p class="card-footer-item">{{ weight }} lbs</p>
                </footer>
                </div>
            </div>

            <UpdateProfile :isOpenProfile="isOpenProfile" v-on:close-profile="profileModal()" v-on:update-profile="updateProfile"></UpdateProfile>

            <!--Second Column with Current Stats and Goals-->
            <div class="column is-one-third">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            Goals
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <p>Focus: {{ focus }}</p>
                            <p>Weight: {{ goalweight }} lbs</p>    
                            <p>Avg Steps: {{ goalsteps }}</p>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item button" @click="goalModal()">Edit</a>
                    </footer>
                </div>

            <UpdateGoals :isOpenGoal="isOpenGoal" v-on:update-goals="updateGoals" v-on:close-goals="goalModal()"></UpdateGoals>  

                <br> <!--adds space between elements-->

                <div class="box has-text-centered">
                    <h1 class="title">Weight Change</h1>
                    <p> {{ weightdif }} lbs from your goal!</p>
                </div>

            </div> <!--Column for main columns-->
            <div class="column is-one-third">
                <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                    Excercise Log
                    </p>
                </header>
                <div class="table-container">
                <div class="card-content">
                    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Excercise</th>
                            <th>Duration</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><time datetime="2016-1-1">11:09 - 1 Jan 2016</time></td>
                            <td>Hiking</td>
                            <td>2:00</td>
                            <td>350</td>
                        </tr>
                        <tr>
                            <td><time datetime="2016-1-1">14:13 - 9 Jan 2016</time></td>
                            <td>Running</td>
                            <td>0:30</td>
                            <td>120</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <footer class="card-footer">
                        <router-link to="/routine" class="card-footer-item button">
                            Add New Excercise
                        </router-link>
                </footer>
                </div>
                </div>
                
            </div> <!--Column for main columns-->
        </div> <!--Columns for main columns-->
    </section>
  </div>
</template>

<script>
import UpdateProfile from "@/components/UpdateProfile.vue";
import UpdateGoals from "@/components/UpdateGoals.vue";
import * as pointer from "@/models/Profile";

export default {
    data: () => ({
        image: "https://external-preview.redd.it/BQ9ia45GPitMXmDRYj-I4MkAySsaQ8y3pmNdyT0xp6s.jpg?auto=webp&s=a038bba7257999e84e8fd1d2a848d44f3f3b71af",
        //use for modal
        isOpenProfile: false,
        isOpenGoal: false,
        //current statistics
        name: pointer.State.Profile[0].Name,
        handle: pointer.State.Profile[0].Handle,
        image: pointer.State.Profile[0].Image,
        description: pointer.State.Profile[0].Description,
        age: pointer.State.Profile[0].Age,
        height: pointer.State.Profile[0].Height,
        weight: pointer.State.Profile[0].Weight,
        sex: pointer.State.Profile[0].Sex,
        //goals
        focus: pointer.State.Goals[0].Focus,
        goalweight: pointer.State.Goals[0].WeightGoal,
        goalsteps: pointer.State.Goals[0].StepGoal,
    }),
    methods: {
        updateGoals (newfocus, newgoalweight, newgoalsteps) {
            this.focus = newfocus,
            this.goalweight = newgoalweight,
            this.goalsteps = newgoalsteps
        },
        updateProfile (newdescription, newage, newheight, newweight) {
            this.description = newdescription,
            this.age = newage,
            this.height = newheight,
            this.weight = newweight
        },
        goalModal () {
            this.isOpenGoal = !this.isOpenGoal;
        },
        profileModal () {
            this.isOpenProfile = !this.isOpenProfile;
        }
    },
    computed: {
        weightdif () {
            return Math.abs(this.weight - this.goalweight)
        }
    },
    created() {
        pointer.Init()
    },
    components: {
        UpdateProfile,
        UpdateGoals
    }
}
</script>

<style>

</style>