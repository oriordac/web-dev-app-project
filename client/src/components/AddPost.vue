<template>
<div class="modal" :class="{'is-active':isOpenNewPost}">
    <div class="modal-background"></div>
    <div class="modal-content">

        <div class="container">
        <div class="box">
            <h1 class="title">New Post</h1>
            
            <div class="field">
                <label class="label">What's on your mind?</label>
                <div class="control">
                    <textarea class="textarea" placeholder="What did you accomplish today?" v-model="text"></textarea>
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                <button class="button is-info" @click="post()">Submit</button>
                </div>
            </div>

        </div> <!--End of box-->
        </div> <!--End of container-->

    </div> <!--End of Modal Content-->
    <button class="modal-close is-large" aria-label="close" @click="closePost()"></button>
</div>
</template>

<script>
import Social from "@/models/Social";

export default {
    props: ["isOpenNewPost"],
    data: () => ({
        Social,
        text: ""
    }),
    methods: {
        async post() {
            this.$emit('new-post', this.text);
            this.$emit('close-newpost');
        },
        closePost() {
            this.$emit('close-newpost');
        }
    }
}
</script>

<style>

</style>