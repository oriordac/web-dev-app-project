<template>
<div class="modal" :class="{'is-active':isOpenNewComment}">
    <div class="modal-background"></div>
    <div class="modal-content">

        <div class="container">
        <div class="box">
            <h1 class="title">New Comment</h1>
            
            <div class="field">
                <label class="label">What do you want to say?</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Type your response here" v-model="text"></textarea>
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
    props: ["isOpenNewComment", "i"],
    data: () => ({
        Social,
        text: "",
        //current user information
        userid: Social.State.Profile.UserId,
        name: Social.State.Profile.Name,
        image: Social.State.Profile.Image,
        handle: Social.State.Profile.Handle
    }),
    methods: {
        async post() {
            try {
                await Social.newComment(this.i, this.text);
            } catch (error) {
                this.error = error;    
            }
            Social.State.Social[this.i].Comment.push({
                UserId: this.userid,
                Name: this.name,
                Handle: this.handle,
                Image: this.image,
                Text: this.text,
                Timestamp: this.shortDateBuilder(),
                Upvote: 0,
                Liked: []
            });
            Social.State.Social[this.i].ReplyCount++;
            this.$emit('close-newcomment');
        },
        closePost() {
            this.$emit('close-newcomment');
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
    }
}
</script>

<style>

</style>