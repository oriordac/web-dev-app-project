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
                      <tr v-for="x in Calories.State.Calories.Calories" :key="x[1]">
                        <td>{{ x[0] }}</td> <!--date-->
                        <td>{{ x[1] }}</td> <!--name-->
                        <td>{{ x[2] }}</td> <!--calories-->
                        <td>{{ x[3] }}</td> <!--protein-->
                        <td>{{ x[4] }}</td> <!--carbs-->
                        <td>{{ x[5] }}</td> <!--fat-->
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
import Calories from "../models/Calories";
import AddCalorie from "@/components/AddCalorie.vue";

export default {
    
  data:() => ({
    Calories,
    isOpen: false,

    calorieCount: Calories.State.Calories.CalorieCount,
    proteinCount: Calories.State.Calories.ProteinCount,
    carbsCount: Calories.State.Calories.CarbsCount,
    fatCount: Calories.State.Calories.FatCount
  }),
  methods: {
      calorieModal() {
        this.isOpen = !this.isOpen;
      },
      async add(date, newFoodName, newCalorie, newProtein, newCarbs, newFat) {
        try {
          await Calories.add(date, newFoodName, newCalorie, newProtein, newCarbs, newFat);
        } catch (error) {
          this.error = error;
        }
        Calories.State.Calories.Calories.push([date, newFoodName, newCalorie, newProtein, newCarbs, newFat]);
      },
      async addnutrients(newCalorie, newProtein, newCarbs, newFat) {
        try {
          await Calories.addnutrients(newCalorie, newProtein, newCarbs, newFat);
          this.calorieCount += newCalorie;
          this.proteinCount += newProtein;
          this.carbsCount += newCarbs;
          this.fatCount += newFat;
        } catch (error) {
          this.error = error;
        }
      }
  },
  components: {
    AddCalorie
  },
  created() {
    Calories.Init()
  }
}
</script>

<style>

</style>