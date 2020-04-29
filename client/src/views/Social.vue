<template>
<div class="test">
<div class="columns">
<section class="section column is-half is-offset-one-quarter">
<!--Bar to propmt user to share content. Opens modal with textarea-->
<div class="box">
  <nav class="level">
  <!-- Left side -->
  <div class="level-left">
    <div class="level-item">
      <p class="subtitle is-5">
        Have something to share?
      </p>
    </div>
  </div>
  <!-- Right side -->
  <div class="level-right">
    <p class="level-item">
      <a class="button is-link" @click="newPostModal">
        <i class="fas fa-pen-nib"></i>
      </a>
    </p>
  </div>
  </nav>
</div>

<!-- For-loop to generate posts on the server-->
<div class="box" v-for="post in Social.State.Social" :key="post.text">
<article class="media">
<figure class="media-left">
  <p class="image is-64x64">
    <img :src="post.Image">
  </p>
</figure>
<div class="media-content">
  <div class="content">
    <p>
      <strong>{{ post.Name }}</strong> <small>@{{ post.Handle }}</small> <small>{{ timestamp }}</small>
      <br>
      {{ post.Text }}
    </p>
  </div>
</div>
</article>
</div>

</section>
</div>

<NewPost :isOpenNewPost="isOpenNewPost" v-on:close-newpost="newPostModal" v-on:post-newpost="newPost"></NewPost>

</div>
</template>

<script>
import Social from "@/models/Social";
import NewPost from "@/components/AddPost.vue";

export default {
  components: {
    NewPost
  },
  data: () => ({
    Social,
    isOpenNewPost: false,
    timestamp: "Apr 26"
  }),
  methods: {
    newPostModal() {
      this.isOpenNewPost = !this.isOpenNewPost;
    },
    async newPost(text) {
            try{
              await Social.newPost(text);
            } catch(error) {
                this.error = error;
            }
        },
  },
  created() {
      Social.Init()
  }
}
</script>

<style>

</style>