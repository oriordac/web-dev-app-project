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
<!--Main feed-->
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
          <a class="level-item" @click="upvote(i)">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
          <p class="level-item">{{ post.Upvote }}</p>
          <a class="level-item">
            <span class="icon is-small"><i class="far fa-comment"></i></span>
          </a>
          <p class="level-item">{{ post.ReplyCount }}</p>
          <a class="level-item" @click="newCommentModal();setMainPostIndex(i)">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
        </div>
    </nav>

    <!--Nested Media Object INSIDE the prime MEDIA-CONTENT CLASS-->
    <article class="media" v-for="(comment, index) in Social.State.Social[i].Comment" :key="comment.Timestamp">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="comment.Image">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ comment.Name }}</strong> <small>@{{ comment.Handle }}</small> <small>{{ comment.Timestamp }}</small>
          <br>
          {{ comment.Text }}
        </p>
      </div>
      <nav class="level is-mobile">
          <div class="level-left">
            <!-- pass "i" for the main post index and "index" for the comment index-->
            <a class="level-item" @click="likeComment(i, index)">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
            <p class="level-item">{{ comment.Upvote }}</p>
          </div>
      </nav>
    </div>
    </article>
  </div>
</article>



</div>

</section>
</div>

<NewPost :isOpenNewPost="isOpenNewPost" v-on:close-newpost="newPostModal"></NewPost>
<NewComment :isOpenNewComment="isOpenNewComment" :i="mainPostIndex" v-on:close-newcomment="newCommentModal"></NewComment>

</div>
</template>

<script>
import Social from "@/models/Social";

import NewPost from "@/components/AddPost.vue";
import NewComment from "@/components/NewComment.vue";

export default {
  components: {
    NewPost,
    NewComment
  },
  data: () => ({
    Social,
    isOpenNewPost: false,
    isOpenNewComment: false,
    mainPostIndex: 0
  }),
  methods: {
    newPostModal() {
      this.isOpenNewPost = !this.isOpenNewPost;
    },
    newCommentModal() {
      this.isOpenNewComment = !this.isOpenNewComment;
    },
    setMainPostIndex(index) {
      this.mainPostIndex = index;
    },
    async upvote(index) {
      try {
        await Social.likePost(index);
      } catch (error) {
        this.error = error;
      }
    },
    async likeComment(postindex, commentindex) {
      try {
        await Social.likeComment(postindex, commentindex);
      } catch (error) {
        this.error = error;
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