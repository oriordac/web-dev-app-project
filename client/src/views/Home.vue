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
                      Consider becoming a member of <em>Bewegen</em> - a fitness app with emphasis on local hiking trails.
                      Standard features include a calorie and water-intake tracker, workout routines, 
                      and a weather tracker to ensure pleasant hikes in the mountains.
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
            <div v-for="photo in Photos" :key="photo.PhotoID" style="display: inline-block;">
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
import { Photos, updatePhoto, updateText } from "../models/Photos";

export default {
  data: () => ({
    Photos,
    image: Photos[0].PhotoImage,
    text: Photos[0].LocationName
  }),
  methods: {
    updatePhoto,
    updateText
  }
}
</script>
