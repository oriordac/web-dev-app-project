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

                    <!-- <div class="field">
                        <div class="control has-icon-left">
                            <button class="button is-danger" @click.prevent="google_login">
                            <span class="icon is-small is-left">
                                <i class="fab fa-google"></i>
                            </span>
                            <span>
                                Log-in with Google
                            </span>
                            </button>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control has-icon-left" @click.prevent="facebook_login">
                            <button class="button is-link">
                            <span class="icon is-small is-left">
                                <i class="fab fa-facebook-square"></i>
                            </span>
                            <span>
                                Log-in with Facebook
                            </span>
                            </button>
                        </div>
                    </div> -->

                    <img :src="profile_picture" v-if="profile_picture" />

                    </form>
                </div>
            </div>
    </section>
  </div> <!--root tag-->
</template>

<script>
// import { Login } from "../models/Users";
// const GOOGLE_CLIENT_ID = "62045495566-nf7dp1ife3i57v9gqg514bsiu3peroq8.apps.googleusercontent.com";
// const FACEBOOK_CLIENT_ID = "879616965840226";
// let auth2 = null;

export default {
  data: () => ({
    username: "",
    password: "",
    error: "",
    profile_picture: null
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
    },
    google_login(){
      auth2.signIn()
        .then(googleUser =>{
          console.log(googleUser);
                    
          const profile = googleUser.getBasicProfile();
          console.log("ID: " + profile.getId()); // Don't send this directly to your server!
          console.log('Full Name: ' + profile.getName());
          console.log('Given Name: ' + profile.getGivenName());
          console.log('Family Name: ' + profile.getFamilyName());
          console.log("Image URL: " + profile.getImageUrl());
          console.log("Email: " + profile.getEmail());

          this.profile_picture = profile.getImageUrl();

          return Login("google", googleUser.getAuthResponse().access_token)
            .then(x=> this.$router.push('/profile'))
        } )
        .catch(error => this.error = error)
    },
    facebook_login(){
      FB.login(response => {
        console.log(response);
        FB.api('/me?fields=email,name,picture', response => {
            console.log(response);
            this.profile_picture = response.picture.data.url;
        });
        Login("facebook", response.authResponse.accessToken)
          .then(x=> this.$router.push('/profile'))
          .catch(error => this.error = error)
      }, 
      {scope: 'email'}
      );
    }
  },
  created() {
    const googleScriptTag = document.createElement('script')
    googleScriptTag.setAttribute('src', 'https://apis.google.com/js/api:client.js')
    document.head.appendChild(googleScriptTag)
    googleScriptTag.onload = () => {
      // the global gapi variable is created by loading that script
      gapi.load('auth2', () => {
        auth2 = gapi.auth2.init({
          client_id: GOOGLE_CLIENT_ID,
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        })
      })
    },

    window.fbAsyncInit = function() {
      FB.init({
        appId      : FACEBOOK_CLIENT_ID,
        cookie     : true,
        xfbml      : true,
        version    : 'v3.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return};
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));
  }
}
</script>

<style>

</style>