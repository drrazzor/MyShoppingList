//Todo List

// var h1 = document.getElementsByTagName("h1")[0];

// var button = document.getElementsByTagName("Button")[0];
// button.addEventListener("click", function(){
// 	h1.style.color="lightblue";
// 	})


var userInput = document.getElementById("userInput");
var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

enterButton.addEventListener("click", function(){
	if(userInput.value.length > 0) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(userInput.value));
	ul.appendChild(li);
	userInput.value="";
	}
})


userInput.addEventListener("keypress", function(e){
	if(userInput.value.length > 0 && event.keyCode === 13) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(userInput.value));
	ul.appendChild(li);
	userInput.value="";
	}
})


	ul.addEventListener("click", function(e){
		if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
})
			


			// ul.setAttribute('style', 'text-decoration:line-through');
			// console.log("clicked on an item! Strike-through");
			
	
	
	

	
	
