<template>
  <div class="login">
    <section class="hero is-info is-bold is-fullheight">
        <div class="hero-body" style="display: inline-block;">
            <div class="title has-text-centered">Log-In</div>
            <div class="container level-item">
                <form class="box" @submit.prevent="login">
                      <p class="has-text-centered">{{ error }}</p>
                      <div class="field">
                        <label class="label">Username</label>
                        <div class="control has-icons-left has-icons-right">
                          <input class="input" type="text" placeholder="Text input" v-model="username">
                          <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                          </span>
                        </div>
                        <p class="help is-dark">Enter an username</p>
                      </div>

                      <div class="field">
                        <label class="label">Password</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="password" placeholder="Password" name="Password" v-model="password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                            <p class="help is-dark">Enter a password</p>
                        </div>
                    </div>
                      
                    <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-info">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light" @click="clear">Clear</button>
                    </div>
                    </div>

                    <hr>

                    <p class="content">Sample login credentials</p>
                    <ul>
                      <li><strong>Username: </strong>Thor Odinson <strong>Password: </strong>Mjolnir</li>
                      <li><strong>Username: </strong>Odin Allfather <strong>Password: </strong>Gungnir</li>
                    </ul>
                </form>
              </div>
            </div>
    </section>
  </div> <!--root tag-->
</template>

<script>
import { Login } from "../models/Users";

export default {
  data: () => ({
    username: "",
    password: "",
    error: ""
  }),
  methods: {
    async login() {
      try {
        await Login(this.username, this.password);
        this.$router.push("/profile");
      } catch (error) {
        this.error = error;
      }
    },
    clear () {
      this.username = "";
      this.password = "";
    }
  }
}
</script>

<style>

</style>