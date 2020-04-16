<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
        <img src="../assets/bewegenlogo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" :class="{'is-active':isOpen}" @click="isOpen =! isOpen">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div class="navbar-menu" :class="{'is-active':isOpen}">
        <div class="navbar-start">
        
        <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
        <router-link to="/about" class="navbar-item" active-class="is-current">About</router-link>
        <router-link to="/test" class="navbar-item" active-class="is-current">Test</router-link>
      

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" active-class="is-current">
            Features
            </a>

            <div class="navbar-dropdown">
                
            <router-link to="/profile" class='navbar-item' active-class="is-current">
                Profile
            </router-link>      

            <hr class="navbar-divider">

            <router-link to="/liquid" class="navbar-item" active-class="is-current">
                Hydration Tracker
            </router-link>
            <router-link to="/calorie" class="navbar-item" active-class="is-current">
                Calorie Tracker
            </router-link>

            <hr class="navbar-divider">

            <router-link to="/routine" class="navbar-item" active-class="is-current">
                Strength Routines
            </router-link>
            <router-link to="/cardio" class="navbar-item" active-class="is-current">
                Cardio
            </router-link>
            </div>
        </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <router-link to="/signup" class="button is-primary" active-class="is-current">Sign up</router-link>
                    <router-link to="/login" class="button is-light" active-class="is-current">Log in</router-link>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    data: () => ({
        isOpen: false
    })
}
</script>

<style>
    .is-current {
        font-weight: bold;
        color: black;
    }
</style>