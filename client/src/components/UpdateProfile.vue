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

            <div class="field">
                <label class="label">Sex</label>
                <div class="control">
                    <label class="radio">
                    <input type="radio" name="question" checked disabled>
                    Male
                    </label>
                    <label class="radio">
                    <input type="radio" name="question" disabled>
                    Female
                    </label>
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
export default {
    props: ["isOpenProfile"],
    data: () => ({
        newdescription: "",
        newage: 0,
        newheight: 0,
        newweight: 0
    }),
    methods: {
        updateProfile() {
        this.$emit('update-profile', this.newdescription, this.newage, this.newheight, this.newweight);
        this.$emit('close-profile');
        },
        closeProfile() {
            this.$emit('close-profile');
        }
    }
}
</script>

<style>

</style>