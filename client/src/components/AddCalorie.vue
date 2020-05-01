<template>
    <div class="modal" :class="{'is-active': isOpen}">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            
            <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Apple" v-model="newFoodName">
            </div>
            <p class="help">Enter the name of food/drink</p>
            </div>

            <div class="field">
            <label class="label">Calories</label>
            <div class="control">
                <input class="input" type="number" v-model.number="newCalorie">
            </div>
            <p class="help">Enter the calorie count</p>
            </div>

            <div class="field">
            <label class="label">Protein</label>
            <div class="control">
                <input class="input" type="number" v-model.number="newProtein">
            </div>
            <p class="help">Enter the protein in grams</p>
            </div>

            <div class="field">
            <label class="label">Carbs</label>
            <div class="control">
                <input class="input" type="number" v-model.number="newCarbs">
            </div>
            <p class="help">Enter the carbs in grams</p>
            </div>

            <div class="field">
            <label class="label">Fat</label>
            <div class="control">
                <input class="input" type="number" v-model.number="newFat">
            </div>
            <p class="help">Enter the fat in grams</p>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" @click="add();calorieModal()">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light" @click="clear()">Clear</button>
                </div>
            </div>

        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="calorieModal()"></button>
    </div>
</template>

<script>
export default {
    props: ["isOpen"],
    data: () => ({
        //v-model elements to add item to table
        newFoodName: "",
        newCalorie: 0,
        newProtein: 0,
        newCarbs: 0,
        newFat: 0,
    }),
    methods: {
        clear() {
            this.newFoodName = "",
            this.newCalorie = 0,
            this.newProtein = 0,
            this.newCarbs = 0,
            this.newFat = 0
        },
        dateBuilder() {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            return `${date} ${month} ${year}`;
        },
        add() {
            let date = this.dateBuilder();
            this.$emit('add-row', date, this.newFoodName, this.newCalorie, this.newProtein, this.newCarbs, this.newFat);
            this.$emit('change-nutrients', this.newCalorie, this.newProtein, this.newCarbs, this.newFat);
        },
        calorieModal() {
            this.$emit('close-modal');
        }
    }
}
</script>

<style>

</style>