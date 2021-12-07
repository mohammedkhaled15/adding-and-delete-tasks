//Declaring variable for button of adding tasks
let adding = document.getElementById("add");

//Declaring variable for value of name of the task
let taskName = document.querySelector("input[name=taskName]");

//Declaring variable for container of the created tasks
let addedTasks = document.querySelector(".added-tasks");


if(window.localStorage.length === 0){ //Check if localstorage has stored data to show it first
  
  //Do Nothing ..

}else{

  for(let [key,value]of Object.entries(localStorage)){ // Using for/of loop to iterate on object's values

    addedTasks.innerHTML += `<div class = "task">${key}<button>Delete</button></div>` // adding content to addedTsaks div beside button of delete

  }

  del(); // Function used to delete records from local storage and addedTasks div

}

adding.addEventListener("click", function(){ // Adding function to the click of Add button
  
  if(taskName.value ==="" && addedTasks.innerHTML === ""){ // Check of the input empty and no divs exist

    addedTasks.innerHTML = `<h3>Please don't leave input empty</h3>` // Showing message

  }else if(taskName.value ==="" && addedTasks.innerHTML !== ""){ // Check of the input empty and divs exist in the main div

    alert("Please don't leave input empty") 
    
  }else{ // In case of input has value
      
      if(localStorage.getItem(taskName.value)){ // Checking first if the value exists in the local storage

        alert("Please Don't Repeat Entry") // Preventing user from repeating values

      }else{

        if(addedTasks.innerHTML === `<h3>Please don't leave input empty</h3>`){addedTasks.innerHTML = ""} // In case of there is a previous message from last empty entry we wil delete it to recieve new divs

        addedTasks.innerHTML += `<div class = "task">${taskName.value}<button>Delete</button></div>`// adding content to addedTsaks div beside button of delete

        window.localStorage.setItem(taskName.value,"test") // Recording value in the local storage

        taskName.value = ""

        del(); // Function used to delete records from local storage and addedTasks div

      }

  }

})

function del(){ // Function Responsible for deletion from localstorage and div results

  document.querySelectorAll(".task > button").forEach(function(del){ // Selecting All Delete Buttons and using forEach by passing (del) arrgument through 

    del.addEventListener("click", function(a){ // adding event a click for each arrgu passed through the higher order function

      this.parentElement.remove() // "this" Here refer to selected button and parent element is the div with class task

      localStorage.removeItem(this.previousSibling.wholeText) // Deleting record from localstorage by usng wholeText which convert textNode(previousSibling)to pure string

    })

  })

}