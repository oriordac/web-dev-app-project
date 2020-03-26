<template>
    <div class="modal" :class="{'is-active': isForm}">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            
            <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="Title" v-model="newTitle">
            </div>
            <p class="help">Enter Rountine Title</p>
            </div>

            <div class="field">
            <label class="label">Photo URL</label>
            <div class="control">
                <input class="input" type="text" v-model="newPhoto">
            </div>
            <p class="help">Enter the web address of an img/png file</p>
            </div>

            <div class="field">
            <label class="label">Excerise 1</label>
            <div class="control">
                <input class="input" type="text" v-model="newExcer1">
            </div>
            <p class="help">Enter the name of the excercise</p>
            </div>

            <div class="field">
            <label class="label">Excerise 2</label>
            <div class="control">
                <input class="input" type="text" v-model="newExcer2">
            </div>
            <p class="help">Enter the name of the excercise</p>
            </div>

            <div class="field">
            <label class="label">Excerise 3</label>
            <div class="control">
                <input class="input" type="text" v-model="newExcer3">
            </div>
            <p class="help">Enter the name of the excercise</p>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" @click="add();adminModal()">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light" @click="clear">Cancel</button>
                </div>
            </div>

        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="adminModal"></button>
    </div>
</template>

<script>
export default {
    props: ["isForm"],
    data: () => ({
        //v-model elements for admin form to add routines
        newTitle: "",
        newPhoto: "",
        newExcer1: "",
        newExcer2: "",
        newExcer3: ""
    }),
    methods: {
        clear() {
            this.newTitle = "",
            this.newPhoto = "",
            this.newExcer1 = "",
            this.newExcer2 = "",
            this.newExcer3 = ""
        },
        add() {
        this.$emit('add-routine', this.newTitle, this.newPhoto, this.newExcer1, this.newExcer2, this.newExcer3);
        },
        adminModal() {
            this.$emit('close-admin');
        }
    }
}
</script>

<style>

</style>