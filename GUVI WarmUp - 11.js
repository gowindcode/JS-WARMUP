/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	
	const frameCalculation = num1 * num2 * 60;
	
	return frameCalculation;
	
	///Your code Ends here
}

// let fps = frames(1, 1);
// let fps = frames(10, 1);
let fps = frames(10, 25);
console.log(fps);
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/