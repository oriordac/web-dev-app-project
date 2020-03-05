<template>
  <div class="calorie">
    <section class="hero is-danger is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    <span class="icon">
                        <i class="fas fa-utensils"></i>
                    </span>
                    Calorie Tracker
                </h1>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">Food Item</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" name="foodname" v-model="newFoodName">
                        <span class="icon is-small is-left">
                        <i class="fas fa-apple-alt"></i>
                        </span>
                        <p class="help is-dark">Enter the name of the food or drink</p>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Calories</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="number" name="calorie" placeholder="0" v-model.number="newCalorie">
                        <span class="icon is-small is-left">
                            <i class="fas fa-fire"></i>
                        </span>
                        <p class="help is-dark">Enter the calories</p>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Protien</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="numver" name="protien" placeholder="0" v-model.number="newProtein">
                        <span class="icon is-small is-left">
                            <i class="fas fa-drumstick-bite"></i>
                        </span>
                        <p class="help is-dark">Enter the protien content in grams</p>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Carbs</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="number" name="carbs" placeholder="0" v-model.number="newCarbs">
                        <span class="icon is-small is-left">
                            <i class="fas fa-bread-slice"></i>
                        </span>
                        <p class="help is-dark">Enter the protien content in grams</p>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Fat</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="number" name="fat" placeholder="0" v-model.number="newFat">
                        <span class="icon is-small is-left">
                            <i class="fas fa-bacon"></i>
                        </span>
                        <p class="help is-dark">Enter the fat content in grams</p>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-danger" @click="add();addcalorie();addprotein();addcarbs();addfat()">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-danger is-light">Cancel</button>
                    </div>
                </div>
            </div>

            <div class="column">
                <h1 class="title has-text-centered">
                   Daily Nutrients
                </h1>
                <hr>
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Calories</p>
                        <p class="title">{{calorieCount}}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Protien</p>
                        <p class="title">{{proteinCount}}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Carbs</p>
                        <p class="title">{{carbsCount}}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <p class="heading">Fat</p>
                        <p class="title">{{fatCount}}</p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
       
        <table class="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Name of Food</th>
                    <th>Calories</th>
                    <th>Protien</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="x in todos" :key="x">
                    <td>{{x.name}}</td>
                    <td>{{x.calorie}}</td>
                    <td>{{x.protien}}</td>
                    <td>{{x.carbs}}</td>
                    <td>{{x.fat}}</td>
                </tr>
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    </section>
  </div>
</template>

<script>
export default {
    data:() => ({
        calorieCount: 0,
        proteinCount: 0,
        carbsCount: 0,
        fatCount: 0,

        newFoodName: "",
        newCalorie: 0,
        newProtein: 0,
        newCarbs: 0,
        newFat: 0,

        todos: [
            {
                name: "Sample",
                calorie: 0,
                protien: 0,
                carbs: 0,
                fat: 0
            }
        ]
    }),
    methods: {
        add() {
            this.todos.push(
              { 
                name: this.newFoodName, 
                calorie: this.newCalorie, 
                protien: this.newProtein, 
                carbs: this.newCarbs,
                fat: this.newFat 
              }
            )
        },
        addcalorie() {
            this.calorieCount += this.newCalorie
        },
        addprotein() {
            this.proteinCount += this.newProtein
        },
        addcarbs() {
            this.carbsCount += this.newCarbs
        },
        addfat() {
            this.fatCount += this.newFat
        }
    }
}
</script>

<style>

</style>