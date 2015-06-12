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
var mimosa = new Drink("Mimosa", "breakfast drink", 8.00, [orangeJuice, champagne]);
console.log(mimosa.toString());


var Plate = function(name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients =  ingredients
}

Plate.prototype.toString = function () {
	var plateIngredients = ""
	for (var i = 0; i < this.ingredients.length; i++) {
		if ( (i === 0) && (this.ingredients.length === 2)  ) {
			plateIngredients += this.ingredients[i].foodType
		}
		else if (i < this.ingredients.length-1) {
			plateIngredients += this.ingredients[i].foodType +", "

		} else{
			var lastPlateIngredient = this.ingredients[i].foodType
		};		
	};		
	return this.name + " is a dinner of " + this.description + " that costs $" +this.price  + " and is made with " + plateIngredients + " and " + lastPlateIngredient + "."
}

var cheeseSteak = new Plate("Cheese Steak", "cheese covered steak with carrots", 16.99, [steak, carrots, cheese]);
console.log(cheeseSteak.toString());



var Order = function(plate, drink) {
	this.plate = plate
	this.drink = drink
}

Order.prototype.toString() {
	return "Your order consists of " + this.plate + " and a " + this.drink + "."
}

var steakAndMimosa = new Order(cheeseSteak, mimosa);
console.log(steakAndMimosa.toString());

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






