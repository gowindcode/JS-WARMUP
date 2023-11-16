/* Given a word, "getLengthOfWord" returns the length of the given word. */

function getLengthOfWord(word1) {
	///Your code Starts here 
	
	if (typeof word1 === "string" || typeof word1 === "" || typeof word1 === " ") {
		return word1.length;
	} else if (typeof word1 === undefined && isNaN(word1)) {
		return -1;
	} else {
		return -1;
	}
	
	
	
	///Your code Ends here
}
// let wordlength = getLengthOfWord("GUVI");
// let wordlength = getLengthOfWord("");
// let wordlength = getLengthOfWord();
let wordlength = getLengthOfWord(9);
console.log(wordlength);
/*
Lines For TestCase

getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);
*/