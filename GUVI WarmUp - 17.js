/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	
	const distanceX = x2 - x1;
	const distanceY = y2 - y1;
	
	const distanceBetween = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
	return Math.floor(distanceBetween);
	
	///Your code Ends here
}

// let distanceBetweenTwoPoints = getDistance(100, 100, 400, 300);
let distanceBetweenTwoPoints = getDistance(1, 2, 4, 6);
console.log(distanceBetweenTwoPoints);
/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/