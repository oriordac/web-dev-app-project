<template>
  <div class="signup">
      <section class="hero is-info is-bold is-fullheight">
        <div class="hero-body" style="display: inline-block;">
            <div class="title has-text-centered">Sign-Up</div>
            <div class="container level-item">
                <div class="box">
                      
                      <div class="field">
                        <label class="label">Username</label>
                        <div class="control has-icons-left has-icons-right">
                          <input class="input" type="text" placeholder="Text input">
                          <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                          </span>
                        </div>
                        <p class="help is-dark">Enter an username</p>
                      </div>

                      <div class="field">
                        <label class="label">Password</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="password" placeholder="Password" name="Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                            <p class="help is-dark">Enter a password</p>
                        </div>
                    </div>
                      
                      <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left">
                          <input class="input" type="email" placeholder="Email input">
                          <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                          </span>
                        </div>
                        <p class="help is-dark">Enter an email</p>
                      </div>
                      
                      <div class="field is-grouped">
                        <div class="control">
                          <button class="button is-info">Submit</button>
                        </div>
                        <div class="control">
                          <button class="button is-link is-light">Cancel</button>
                        </div>
                      </div>

                      <hr>

                      <div class="field">
                        <div class="control has-icon-left">
                          <button class="button is-link">
                            <span class="icon is-small is-left">
                              <i class="fab fa-facebook-square"></i>
                            </span>
                            <span>
                              Sign-up with Facebook
                            </span>
                          </button>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>