/* Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’. */

function getNthElement(array, n) {
	///Your code Starts here 
	
	if (n < 0 || n >= array.length || array.length === 0) {
		return undefined;
	} else {
		return array[n];
	}
	
	///Your code Ends here
}
// const nThElement = getNthElement ([1, 3, 5], 1);
// const nThElement = getNthElement ([1, 3, 5], 2);
const nThElement = getNthElement([], 2);
console.log(nThElement);
/*
Lines For TestCase

getNthElement([1, 3, 5], 1);
getNthElement([1, 3, 5], 2);
getNthElement([], 2);
*/