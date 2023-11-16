/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	///Your code Starts here 
	
	if (typeof num !== "number" || isNaN(num)) {
		
		return -1; // here first loop if the input value is a string or letters loop                terminate and return -1.
	}
	return num % 2 === 0; // here second loop only check the input divisible by 2 and            remainder should be zero. If match returns true.
	
	///Your code Ends here
}

// let itIsEvenOrNot = isEven(12);
// let itIsEvenOrNot = isEven(0);
// let itIsEvenOrNot = isEven(11);
let itIsEvenOrNot = isEven("11h");
console.log(itIsEvenOrNot);
/*
Lines For TestCase

isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/