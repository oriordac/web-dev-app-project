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
                            <p class="title is-4">Marcus Aurelius</p>
                            <p class="subtitle is-6">@meditations</p>
                        </div>
                        <div class="media-right">
                            <span class="button icon" @click="isOpenProfile = !isOpenProfile">
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

            <!--MODAL to change personal data with a form-->
                <div class="modal" :class="{'is-active':isOpenProfile}">
                    <div class="modal-background"></div>
                    <div class="modal-content">

                        <div class="container">
                        <div class="box">
                            <h1 class="title">Update Profile</h1>

                            <div class="field">
                                <label class="label">Description</label>
                                <div class="control">
                                    <textarea class="textarea is-info" placeholder="Info textarea" v-model="newdescription"></textarea>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Age</label>
                                <div class="control">
                                    <input class="input" type="number" v-model="newage">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Height</label>
                                <div class="control">
                                    <input class="input" type="number" v-model="newheight">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Weight</label>
                                <div class="control">
                                    <input class="input" type="number" v-model="newweight">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Sex</label>
                                <div class="control">
                                    <label class="radio">
                                    <input type="radio" name="question" checked disabled>
                                    Male
                                    </label>
                                    <label class="radio">
                                    <input type="radio" name="question" disabled>
                                    Female
                                    </label>
                                </div>
                            </div>
                            
                            <div class="field is-grouped">
                                <div class="control">
                                <button class="button is-info" @click="updateProfile">Submit</button>
                                </div>
                            </div>

                        </div> <!--End of box-->
                        </div> <!--End of container-->

                    </div> <!--End of Modal Content-->
                    <button class="modal-close is-large" aria-label="close" @click="isOpenProfile =! isOpenProfile"></button>
                </div>

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
                        <a href="#" class="card-footer-item button" @click="isOpenGoal =! isOpenGoal">Edit</a>
                    </footer>
                </div>

                <!--MODAL to change goals with a form-->
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
                                    <input class="input" type="number" :placeholder="goalweight" v-model="newgoalweight">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-weight"></i>
                                    </span>
                                    <p class="help is-dark">Enter your desired weight</p>
                                </div>
                            </div>
                            
                            <div class="field">
                                <label class="label">Steps Goal</label>
                                <div class="control has-icons-left">
                                <input class="input" type="number" :placeholder="goalsteps" v-model="newgoalsteps">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-shoe-prints"></i>
                                </span>
                                </div>
                                <p class="help is-dark">Enter your average steps goal</p>
                            </div>
                            
                            <div class="field is-grouped">
                                <div class="control">
                                <button class="button is-info" @click="updateGoals">Submit</button>
                                </div>
                            </div>

                        </div> <!--End of box-->
                        </div> <!--End of container-->

                    </div> <!--End of Modal Content-->
                    <button class="modal-close is-large" aria-label="close" @click="isOpenGoal =! isOpenGoal"></button>
                </div>

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
                        <a href="#" class="card-footer-item button">Add New Excercise</a>
                </footer>
                </div>
                </div>
                
            </div> <!--Column for main columns-->
        </div> <!--Columns for main columns-->
    </section>
  </div>
</template>

<script>
export default {
    data: () => ({
        image: "https://external-preview.redd.it/BQ9ia45GPitMXmDRYj-I4MkAySsaQ8y3pmNdyT0xp6s.jpg?auto=webp&s=a038bba7257999e84e8fd1d2a848d44f3f3b71af",
        //use for modal
        isOpenProfile: false,
        isOpenGoal: false,
        //current statistics
        description: "History enthusiast interested in hiking as a training regime to emulate the marches of Roman legionnaires",
        age: 23,
        height: 180,
        weight: 200,
        sex: "Male",
        //Use Modal form to change stats with v-modal
        newdescription: "",
        newage: 0,
        newheight: 0,
        newweight: 0,
        //goals
        focus: "Weight Lost",
        goalweight: 190,
        goalsteps: 5000,
        //Use Modal form to change goals with v-modal
        newfocus: "",
        newgoalweight: 0,
        newgoalsteps: 0,
    }),
    methods: {
        updateGoals () {
            this.focus = this.newfocus,
            this.goalweight = this.newgoalweight,
            this.goalsteps = this.newgoalsteps
        },
        updateProfile () {
            this.description = this.newdescription,
            this.age = this.newage,
            this.height = this.newheight,
            this.weight = this.newweight
        }
    },
    computed: {
        weightdif () {
            return Math.abs(this.weight - this.goalweight)
        }
    }
}
</script>

<style>

</style>