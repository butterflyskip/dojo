/*Problem: Write a print reverse function in JS - use arrays*/

function prntReverse(array){
	for(var i = array.length - 1; i >= 0; i--){
		console.log(array[i]);
	};
}
console.log("original array is [5,6,1,6,8]");

console.log(prntReverse([5,6,1,6,8]));

/*Problem: A function which checks if the items in the array are the same*/

function sameArray(array){
	for(var i = 0; i < array.length - 1; i++){
		if(array[i] === array[i + 1])
			console.log("They are all the same");
		else 
			console.log("The items are different");
	};
}

//using forEach
//CANNOT USE B/C IT WILL EXIT THE FIRST FUNCTION AND ALWAYS EVALUATE TO TRUE
/*function sameArray(array){
	var firstItem = array[0];
	array.forEach(function(items){
		if(items !==firstItem){
			return false;
		}
	});
	return true;
}*/

console.log("original array is " + [1,1,1,1]);
console.log(sameArray([1,1,1,1]));
console.log("original array is " + [1,2,3,4]);
console.log(sameArray([1,2,3,4]));



/*Problem: A function which sums each item in the array*/

function sumArray(array){
	var sum = 0;
	array.forEach(function(item){
		sum += item;
	});
	return sum;
}
console.log("original array is " + [1,2,3]);
console.log("The sum of this array is " +sumArray([1,2,3]));


