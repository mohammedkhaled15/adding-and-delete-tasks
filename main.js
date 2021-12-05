let adding = document.querySelector("button")
let taskName = document.querySelector("input[name=taskName]")
let addedTasks = document.querySelector(".added-tasks")

adding.addEventListener("click", function(){
    if(taskName.value === ""){
        alert("Please don't leave it blank")
    }else{
        let task = document.createElement("div")
        task.classList.add("task")
        addedTasks.append(task)
        task.innerHTML = taskName.value

        var deleteBtn = document.createElement("button")
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.innerHTML = "Delete"
        task.append(deleteBtn)

        document.querySelectorAll(".deleteBtn").forEach(function(a){
            a.addEventListener("click", function(){
                this.parentElement.remove()
        })
        })

    }
})

