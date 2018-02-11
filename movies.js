/* Create an array of movie objects, with title, rating, watched = yes/no properties
 - iterate through the array and print it out */

 var movieDb = [
 	{
 		title: "Thelma and Louise",
 		rating: 5,
 		watched: true
 	},

 	{
 		title: "Gladiator",
 		rating: 5,
 		watched: true
 	},

 	{
 		title: "Mad Max",
 		rating: 5,
 		watched: false
 	},

 	{
 		title: "The Pirates",
 		rating: 4,
 		watched: false
 	}

 ];
 
 movieDb.forEach(function(prints){

 /*	
 alternatively make another function

 	var result = "You have ";
 	if(prints.watched)
 		result += "watched ";
 	else
 		result += "not seen " ;

 	result += "\"" + prints.title + "\" - ";
 	result += prints.rating + " stars";*/

 	console.log(buildResult(prints));
 	
 });


 
  function buildResult(prints)	{

	var result = "You have ";
 	if(prints.watched)
 		result += "watched ";
 	else
 		result += "not seen " ;

 	result += "\"" + prints.title + "\" - ";
 	result += prints.rating + " stars";

 	return result;
  }


