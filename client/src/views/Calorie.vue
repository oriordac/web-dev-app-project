<template>
    <div class="calorie">
    <section class="hero is-success is-fullheight">
        <div class="hero-body" style="display: inline-block;">
            <div class="container level-item">
                <div class="box">
                  <h1 class="is-size-1 has-text-centered">
                    Daily Nutrients
                  </h1>
                <hr>
                <nav class="level has-text-centered">
                    <div class="level-item">
                        <div>
                        <p class="heading">Calories</p>
                        <p class="is-size-1">{{ calorieCount }}</p>
                        </div>
                    </div>
                    <div class="level-item">
                        <div>
                        <p class="heading">Protein</p>
                        <p class="is-size-1">{{ proteinCount }}</p>
                        </div>
                    </div>
                    <div class="level-item">
                        <div>
                        <p class="heading">Carbs</p>
                        <p class="is-size-1">{{ carbsCount }}</p>
                        </div>
                    </div>
                    <div class="level-item">
                        <div>
                        <p class="heading">Fat</p>
                        <p class="is-size-1">{{ fatCount }}</p>
                        </div>
                    </div>
                </nav>
                <nav class="level has-text-centered">
                  <div class="level-item">
                    <button class="button" @click="calorieModal()">Add New Food/Drink</button>
                  </div>
                </nav>
                <table class="table is-bordered is-striped is-hoverable is-fullwidth">
                  <thead>
                      <tr>
                        <th>Date</th>
                        <th>Food</th>
                        <th>Calories</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Fat</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr r v-for="x in todos" :key="x.name">
                        <td>{{x.date}}</td>
                        <td>{{x.name}}</td>
                        <td>{{x.calorie}}</td>
                        <td>{{x.protein}}</td>
                        <td>{{x.carbs}}</td>
                        <td>{{x.fat}}</td>
                      </tr>
                  </tbody>
                </table>
                </div>
            </div>
        </div>
    </section>

    <!--Modal for the Calorie Modal. Form to push new food/drink row to table-->
    <AddCalorie 
    :isOpen="isOpen" 
    v-on:add-row="add" 
    v-on:change-nutrients="addnutrients" 
    v-on:close-modal="calorieModal()">
    </AddCalorie>

    </div>
</template>

<script>
import { todos } from "../models/Calories";
import AddCalorie from "@/components/AddCalorie.vue";

export default {
    
  data:() => ({
    isOpen: false,
    todos,

    calorieCount: 0,
    proteinCount: 0,
    carbsCount: 0,
    fatCount: 0,
  }),
  methods: {
      calorieModal() {
        this.isOpen = !this.isOpen;
      },
      add(date, newFoodName, newCalorie, newProtein, newCarbs, newFat) {
        this.todos.push(
          { 
            date: date,
            name: newFoodName, 
            calorie: newCalorie, 
            protein: newProtein, 
            carbs: newCarbs,
            fat: newFat 
          }
        )
      },
      addnutrients(newCalorie, newProtein, newCarbs, newFat) {
        this.calorieCount += newCalorie;
        this.proteinCount += newProtein;
        this.carbsCount += newCarbs;
        this.fatCount += newFat;
      }
  },
  components: {
    AddCalorie
  }
}
</script>

<style>

</style>