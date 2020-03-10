export const todos = [
    {
        name: "Sample",
        calorie: 0,
        protein: 0,
        carbs: 0,
        fat: 0
    }
];

export function add() {
    this.todos.push(
      { 
        name: this.newFoodName, 
        calorie: this.newCalorie, 
        protein: this.newProtein, 
        carbs: this.newCarbs,
        fat: this.newFat 
      }
    )
};
export function addcalorie() {
    this.calorieCount += this.newCalorie;
};
export function addprotein() {
    this.proteinCount += this.newProtein;
};
export function addcarbs() {
    this.carbsCount += this.newCarbs;
};
export function addfat() {
    this.fatCount += this.newFat;
};