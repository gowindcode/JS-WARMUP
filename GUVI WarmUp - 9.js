/* There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value. */

function remainder(num1, num2) {
	///Your code Starts here 
	const remainderISpossiblyZero = num1 % num2;
	return remainderISpossiblyZero === 0 ? 0 : remainderISpossiblyZero;
	///Your code Ends here
}
// let returnTheValue = remainder(1, 3);
// let returnTheValue = remainder(3, 4);
let returnTheValue = remainder(-9, 45);
// let returnTheValue = remainder(5, 5);
console.log(returnTheValue);
/*
Lines For TestCase
remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);
*/