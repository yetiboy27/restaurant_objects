 var FoodItem = function(foodType, calories, vegan, glutenFree, citrusFree) {
	this.foodType = foodType
	this.calories = calories
	this.vegan = vegan
	this.glutenFree = glutenFree
	this.citrusFree = citrusFree
}

FoodItem.prototype.toString = function() {

	var veganString = function(thatFoodItem) {
		if (thatFoodItem.vegan === true) {
			return "vegan"
		}
		else {
			return "non vegan"
		}
	}
	var glutenString = function(thatFoodItem) {
		if (thatFoodItem.glutenFree === true) {
			return "gluten free"
		}
		else {
			return "not gluten free"
		}
	}
	var citrusString = function(thatFoodItem) {
		if (thatFoodItem.citrusFree === true) {
			return "citrus free"
		}
		else {
			return "not citrus free"
		}
	}
	return this.foodType + " has " + this.calories + " calories and is " + veganString(this) + ", " + glutenString(this) + ", and "  + citrusString(this) + "."
}

var cheese = new FoodItem("cheese", 450, false, true, true);
var carrots = new FoodItem("carrots", 200, true, true, true);
var steak = new FoodItem("Steak", 700, false, true, true);
var orangeJuice = new FoodItem("orange juice", 350, true, true, false);
var champagne = new FoodItem("champagne", 600, true, true, true);
console.log(cheese.toString());
console.log(carrots.toString());
console.log(steak.toString());



var Drink = function(name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients
}

Drink.prototype.toString = function() {
	var drinkIngredients = ""	
	for (var i = 0; i < this.ingredients.length; i++) {
		if ( (i === 0) && (this.ingredients.length === 2)  ) {
			drinkIngredients += this.ingredients[i].foodType
		}
		else if (i < this.ingredients.length-1) {
			drinkIngredients += this.ingredients[i].foodType +", "

		} else{
			var lastDrinkIngredient = this.ingredients[i].foodType
		};		
	};		
	return this.name + " is a " + this.description + " that costs $" +this.price  + " and is made with " + drinkIngredients + " and " + lastDrinkIngredient + "."
}
var mimosa = new Drink("Mimosa", "Breakfast drink", 8.00, [orangeJuice, champagne, cheese, carrots]);
console.log(mimosa.toString());


var Plate = function(name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients =  ingredients
}





var Order = function(plate) {
	this.plate = plate
}

// var Menu = function(plate) {
// 	this.plate =
// }

// var Restaurant = function(name, description, menu) {
// 	this.name = name
// 	this.description = description
// 	this.menu =
// }

// var Customer = function(dietaryPreference) {
// 	this.dietaryPreference = dietaryPreference
// }




var cheeseSteak = new Plate("Cheese Steak", "Cheese covered steak with carrots", 16.99, [steak, carrots, cheese]);

