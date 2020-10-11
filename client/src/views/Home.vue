<template>
  <div class="home">
    <section class="hero is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Bewegen
          </h1>
          <h2 class="subtitle">
            A fitness app with a focus on <em>wandern</em>
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
          <!--Text Information-->
          <div class="column is-half">
              <div class="notification content">
                  <h1 class="title">Welcome | Wilkommen</h1>
                  <p>
                      This site was a class project for Web Server Programming taught by Rabbi Moshe Plotkin during the Spring 2020 semester.
                      The front-end was designed with Vue CLI as the JS framework and Bulma as a CSS framework.
                      Node.js and Express were used for the back-end.
                      Unfortunetly, due to the Spring 2020 sester being cut short, we did not have time to implement a MangoDB to perserve changes;
                      hence, all the sample users are hard-coded and any changes will be lost upon the window closing.
                      Once the current semester and my campus job settles down, the focus will be on implementing MangoDB and allowing new users to register.
                  </p>
                  <a href="/about" class="button is-info">Learn More</a>
              </div>
              <div class="notification content">
                  <h1 class="title">Wanderwege and Wanderlust</h1>
                  <p>
                      Germans are avid hikers and so is this community! With the abundance of many popular trailways, nature perserves, and
                      natural parks, there are a plethora of choices - both well-known and unkown. Read reviews and
                      suggestions from fellow members in your local area or when travelling in a new region.
                  </p>
                  <a href="/profile" class="button is-warning">Explore Community</a>
              </div>
          </div>
          <!--Photos-->
          <div class="column is-half">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img :src="image">
                    </figure>
                </div>
                <div class="card-content">
                    <h1 class="title">{{ text }}</h1>
                </div>
            </div>
            <div v-for="photo in Photos.State.Photos" :key="photo.PhotoID" style="display: inline-block;">
                  <figure @click="updatePhoto(photo.PhotoImage); 
                                  updateText(photo.LocationName);" 
                          class="image is-128x128">
                    <img :src="photo.PhotoImage">
                  </figure>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /sr
import Photos from "../models/Photos";

export default {
  data: () => ({
    Photos,
    image: Photos.State.Photos[0].PhotoImage,
    text: Photos.State.Photos[0].LocationName
  }),
  methods: {
    updatePhoto(photoImage) {
      this.image = photoImage
    },
    updateText(LocationName) {
      this.text = LocationName
    }
  },
  created() {
    Photos.Init()
  }
}
</script>

