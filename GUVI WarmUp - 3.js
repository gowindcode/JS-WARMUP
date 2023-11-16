/* Create a function that takes a string and returns it as an integer. */

function toInteger(mystr) {
	///Your code Starts here 
	const stringToNumber = parseInt(mystr, 10);
	return isNaN(stringToNumber) ? null : stringToNumber;
	///Your code Ends here
}
// let removeString = toInteger("6");
let removeString = toInteger("1000");
// let removeString = toInteger("12");
console.log(removeString);
/*
Lines For TestCase
toInteger("6");
toInteger("1000");
toInteger("12");
*/