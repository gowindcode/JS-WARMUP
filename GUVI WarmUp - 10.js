/* MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:turkey = 2 legshorse = 4 legspigs = 4 legsThe farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. */

function CountLegs(turkey, horse, pigs) {
	///Your code Starts here 
	
	const turkeyLegsTotal = turkey * 2;
	const horseLegsTotal = horse * 4;
	const pigsLegsTotal = pigs * 4;
	
	const sum = turkeyLegsTotal + horseLegsTotal + pigsLegsTotal;
	return sum;
	
	///Your code Ends here
}

// let result = CountLegs(2, 3, 5);
// let result = CountLegs(1, 2, 3);
let allAnimalsTotalLegs = CountLegs(5, 2, 8);
console.log(allAnimalsTotalLegs);
/*
Lines For TestCase

CountLegs(2, 3, 5);
CountLegs(1, 2, 3);
CountLegs(5, 2, 8);
*/