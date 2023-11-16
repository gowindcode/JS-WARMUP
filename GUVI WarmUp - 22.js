/* Given an object and a key, "removeProperty" removes the given key from the given object. */

var obj = {
	"mykey": "value"
}

function removeProperty(obj, key) {
	///Your code Starts here 
	
	delete obj[key];
	return obj.mykey === undefined;
	
	///Your code Ends here
}

removeProperty(obj, "mykey");

// console.log(obj.mykey);
console.log(obj.key);
/*
Lines For TestCase

obj.mykey === undefined;
*/