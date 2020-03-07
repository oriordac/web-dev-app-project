<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
        <img src="../assets/gewegenlogo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" :class="{'is-active':isOpen}" @click="isOpen =! isOpen">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div class="navbar-menu" :class="{'is-active':isOpen}">
        <div class="navbar-start">
        
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            Features
            </a>

            <div class="navbar-dropdown">
                
            <router-link to="/profile" class='navbar-item'>
                Profile
            </router-link>      

            <hr class="navbar-divider">

            <router-link to="/liquid" class="navbar-item">
                Hydration Tracker
            </router-link>
            <router-link to="/calorie" class="navbar-item">
                Calorie Tracker
            </router-link>
            <a class="navbar-item">
                Scale
            </a>

            <hr class="navbar-divider">

            <a class="navbar-item">
                Cardio
            </a>
            <a class="navbar-item">
                Strength Routines
            </a>
            </div>
        </div>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <router-link to="/signup" class="button is-primary">Sign up</router-link>
                    <router-link to="/login" class="button is-light">Log in</router-link>
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

</style>