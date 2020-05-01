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
<div class="box" v-for="(post, i) in Social.State.Social" :key="post.Timestamp">
<article class="media">
<figure class="media-left">
  <p class="image is-64x64">
    <img :src="post.Image">
  </p>
</figure>
<div class="media-content">
  <div class="content">
    <p>
      <strong>{{ post.Name }}</strong> <small>@{{ post.Handle }}</small> <small>{{ post.Timestamp }}</small>
      <br>
      {{ post.Text }}
    </p>
  </div>
  <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item" @click="upvote(i)" :class="{liked : post.Liked}">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
        <p class="level-item">{{ post.Upvote }}</p>
      </div>
    </nav>
</div>
</article>
</div>

</section>
</div>

<NewPost :isOpenNewPost="isOpenNewPost" v-on:close-newpost="newPostModal"></NewPost>

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
    isOpenNewPost: false
  }),
  methods: {
    newPostModal() {
      this.isOpenNewPost = !this.isOpenNewPost;
    },
    async upvote(index) {
      let wasLiked = Social.State.Social[index].Liked
      //if the user has NOT liked the post already
      if(!wasLiked ) {
        try {
          Social.State.Social[index].Upvote++;
          Social.State.Social[index].Liked = true;
          await Social.likePost(index);
        } catch (error) {
          this.error = error
        }
      } else {
        try {
          Social.State.Social[index].Upvote--;
          Social.State.Social[index].Liked = false;
          await Social.dislikePost(index);
        } catch (error) {
          this.error = error;
        }
      }
    } 
  },
  created() {
      Social.Init()
  }
}
</script>

<style>
  .liked {
    color: red;
  }
  .disliked {
    color: black;
  }
</style>