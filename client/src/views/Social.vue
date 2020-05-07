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
          <a class="level-item" style="color: red" @click="upvote(i)" v-if="post.isILiked">
            <span class="icon is-small"><i class="fas fa-heart"></i></span>
          </a>
          <a class="level-item" style="color: red" @click="upvote(i)" v-else>
            <span class="icon is-small"><i class="far fa-heart"></i></span>
          </a>
          <p class="level-item">{{ post.Upvote }}</p>
          <a class="level-item">
            <span class="icon is-small"><i class="far fa-comment"></i></span>
          </a>
          <p class="level-item">{{ post.ReplyCount }}</p>
          <a class="level-item" @click="newCommentModal();setMainPostIndex(i)">
            <span class="icon is-small" style="color: green"><i class="fas fa-reply"></i></span>
          </a>
          <p class="level-item is-size-7" v-if="post.Upvote">
            <span v-if="post.Upvote > 2">{{ post.whoLikedIt }} and {{ post.Upvote - 1 }} others liked this</span>
            <span v-else>{{ post.whoLikedIt }} liked this</span>
          </p>
        </div>
        <div class="level-right">
          <a class="level-item" @click="showComments(i)">
            <span class="icon is-small" v-if="Social.State.Social[i].showComments"><i class="fas fa-angle-up"></i></span>
            <span class="icon is-small" v-else><i class="fas fa-angle-down"></i></span>
          </a>
        </div>
    </nav>

    <!--Nested Media Object INSIDE the prime MEDIA-CONTENT CLASS-->
    <div v-if="Social.State.Social[i].showComments">
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
            <a class="level-item" style="color: red" @click="likeComment(i, index)" v-if="comment.isILiked">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
            <a class="level-item" style="color: red" @click="likeComment(i, index)" v-else>
              <span class="icon is-small"><i class="far fa-heart"></i></span>
            </a>
            <p class="level-item">{{ comment.Upvote }}</p>
            <!--Text showing who liked the post-->
            <p class="level-item is-size-7" v-if="comment.Upvote">
              <span v-if="comment.Upvote > 2">{{ comment.whoLikedIt }} and {{ comment.Upvote - 1 }} others liked this</span>
              <span v-else>{{ comment.whoLikedIt }} liked this</span>
            </p>
          </div>
      </nav>
    </div>
    </article>
    </div>
  </div>
</article>



</div>

</section>
</div>

<NewPost :isOpenNewPost="isOpenNewPost" v-on:close-newpost="newPostModal" v-on:new-post="newPost"></NewPost>
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
    mainPostIndex: 0,
    //current user information
    userid: Social.State.Profile.UserId,
    name: Social.State.Profile.Name,
    image: Social.State.Profile.Image,
    handle: Social.State.Profile.Handle
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
    async newPost(text) {
      try {
        await Social.newPost(text);
      } catch (error) {
        this.error = error
      }
      //Update Vue instance
      Social.State.Social.unshift({
        UserId: this.userid,
        Name: this.name,
        Handle: this.handle,
        Image: this.image,
        Text: text,
        Timestamp: this.shortDateBuilder(),
        Upvote: 0,
        ReplyCount: 0,
        Liked: [],
        Comment: []
      });
    },
    async upvote(index) {
      try {
        await Social.likePost(index);
      } catch (error) {
        this.error = error;
      }
      //Update the Vue instance
      Social.State.Social[index].Upvote++;
      Social.State.Social[index].isILiked = true;
      Social.State.Social[index].whoLikedIt = this.name;
    },
    async likeComment(postindex, commentindex) {
      try {
        await Social.likeComment(postindex, commentindex);
      } catch (error) {
        this.error = error;
      }
      //Update the Vue instance
      Social.State.Social[postindex].Comment[commentindex].Upvote++;
      Social.State.Social[postindex].Comment[commentindex].isILiked = true;
      Social.State.Social[postindex].Comment[commentindex].whoLikedIt = this.name;
    },
    showComments(i) {
      Social.State.Social[i].showComments = !Social.State.Social[i].showComments;
    },
    padTime(time) {
      return (time < 10 ? '0' : '') + time;
    },
    shortDateBuilder() {
      const d = new Date();
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const date = d.getDate();
      const month = months[d.getMonth()];
      const hour = d.getHours();
      const minute = this.padTime(d.getMinutes());
      return `${hour}:${minute} - ${date} ${month}`;
    }
  },
  created() {
      Social.Init()
  }
}
</script>