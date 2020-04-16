<template>
<div class="test">
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
<div v-for="photo in pointer.State.Test" :key="photo.PhotoID" style="display: inline-block;">
  <figure @click="updatePhoto(photo.PhotoImage); 
  updateText(photo.LocationName);" 
  class="image is-128x128">
  <img :src="photo.PhotoImage">
  </figure>
</div>
</div>
</template>

<script>
import * as pointer from "../models/Photos"

export default {
  data: () => ({
    pointer,
    image: pointer.State.Test[0].PhotoImage,
    text: pointer.State.Test[0].LocationName
  }),
  created() {
    pointer.Init()
  },
  methods: {
    updatePhoto(photoImage) {
    this.image = photoImage
    },
    updateText(LocationName) {
    this.text = LocationName
    }
  }
}
</script>

<style>

</style>