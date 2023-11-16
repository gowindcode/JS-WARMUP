/* Given an object and a key, "getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return null. */

var obj = {
	mykey: 'value'
}

function getProperty(obj, key) {
	///Your code Starts here 
	
	if (obj === undefined || obj[key] === undefined) {
		return undefined
		// return null;
	} else {
		
		return obj[key];
	}
	
	///Your code Ends here
}

// console.log(getProperty(obj, "mykey"));
console.log(getProperty(obj, "dummykey"));
/*
Lines For TestCase

getProperty(obj,'mykey');
getProperty(obj,'dummykey');
*/