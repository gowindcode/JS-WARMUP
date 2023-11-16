/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	const firstInput = (firstName || " " || "").trim();
	const secondInput = (lastName || " " || "").trim();
	
	if (!firstInput) {
		return secondInput;
	} else if (!secondInput) {
		return firstInput;
	} else if (firstInput === "" && secondInput === "") {
		return "" + "";
	} else {
		// Concatenate the first and last names with a space in between
		return firstInput + ' ' + secondInput;
	}
	///Your code Ends here
}

// let fullName = getFullName("GUVI", "GEEK");
// let fullName = getFullName("GUVI" );
// let fullName = getFullName( "GEEK");
let fullName = getFullName("", "");
console.log(fullName);
/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/