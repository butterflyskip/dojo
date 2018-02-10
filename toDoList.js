//var toDos = [];  // empty array

var toDos = [];


var input = prompt("What would you like to do?");

while(input !== "quit"){

	if(input === "list"){
		listToDos();
		
	}
		
	else if(input === "new")
		addToDos();

	 else if(input === "delete")
		deleteToDos();
	
input = prompt("What would you like to do?");

}
console.log("Goodbye!")

function listToDos(){
	toDos.forEach(function (todo, i){
		//i == index for item in list
		console.log(i + ":" + todo);
		
		});
}

function addToDos(){
	var newToDo = prompt("Enter new todo");
		toDos.push(newToDo);
		console.log("Item added");
}

function deleteToDos(){
	var index = prompt("enter index of toDos to delete");
	//to delete specific item from list & # items to delete
	toDos.splice(index, 1);
	console.log("Item deleted");
}

