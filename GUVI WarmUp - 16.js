/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
	///Your code Starts here 
	
	return word1.length === word2.length;
	
	
	
	///Your code Ends here
}
// let sameLength = isSameLength("GUVI", "GEEK");
// let sameLength = isSameLength("GUVI", "ZEN");
let sameLength = isSameLength("Hello", "GUVI");

console.log(sameLength);
/*
Lines For TestCase

isSameLength("GUVI", "GEEK");
isSameLength("GUVI", "ZEN");
isSameLength("Hello", "GUVI");
*/