const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("List whith while loop\n**************************");

let i = 0
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("\nList whith for loop\n**************************");

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nList whith for loop - reversed\n**************************");

let reversedIngredients = ingredients.reverse()

for (let i = 0; i < reversedIngredients.length; i++) {
  console.log(reversedIngredients[i]);
}