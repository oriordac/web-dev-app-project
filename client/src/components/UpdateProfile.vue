<template>
<div class="modal" :class="{'is-active':isOpenProfile}">
    <div class="modal-background"></div>
    <div class="modal-content">

        <div class="container">
        <div class="box">
            <h1 class="title">Update Profile</h1>

            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <textarea class="textarea is-info" placeholder="Info textarea" v-model="newdescription"></textarea>
                </div>
            </div>

            <div class="field">
                <label class="label">Age</label>
                <div class="control">
                    <input class="input" type="number" v-model.number="newage">
                </div>
            </div>

            <div class="field">
                <label class="label">Height</label>
                <div class="control">
                    <input class="input" type="number" v-model.number="newheight">
                </div>
            </div>

            <div class="field">
                <label class="label">Weight</label>
                <div class="control">
                    <input class="input" type="number" v-model.number="newweight">
                </div>
            </div>
            
            <div class="field is-grouped">
                <div class="control">
                <button class="button is-info" @click="updateProfile()">Submit</button>
                </div>
            </div>

        </div> <!--End of box-->
        </div> <!--End of container-->

    </div> <!--End of Modal Content-->
    <button class="modal-close is-large" aria-label="close" @click="closeProfile()"></button>
</div>
</template>

<script>
import Profile from "@/models/Profile";

export default {
    props: ["isOpenProfile"],
    data: () => ({
        Profile,
        newdescription: "",
        newage: 0,
        newheight: 0,
        newweight: 0
    }),
    methods: {
        async updateProfile() {
        //edit the state on the server
        try {
            await Profile.editProfile(this.newage, this.newheight, this.newweight, this.newdescription);
        } catch (error) {
            this.error = error;
        }
        //edit profile on vue instance
        this.$emit('update-profile', this.newdescription, this.newage, this.newheight, this.newweight);
        this.$emit('close-profile');
        },
        closeProfile() {
            this.$emit('close-profile');
        },
    }
}
</script>

<style>

</style>