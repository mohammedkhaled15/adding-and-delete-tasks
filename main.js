//Declaring variable for button of adding tasks
let adding = document.getElementById("add");

//Declaring variable for value of name of the task
let taskName = document.querySelector("input[name=taskName]");

//Declaring variable for container of the created tasks
let addedTasks = document.querySelector(".added-tasks");

var arr = [];

//Firing events on loading of the page
window.onload = function () {
  //first check of there is no localstorage records
  if (window.localStorage.length === 0) {
    //Creating event for the button of adding element
    adding.addEventListener("click", function () {
      let task = document.createElement("div"); //Creating the task
      task.id = window.localStorage.length + 1; //attatching ID for the task equal to
      task.classList.add("task");
      task.innerHTML = taskName.value;
      addedTasks.append(task);

      let deletBtn = document.createElement("button");
      deletBtn.classList.add("delete");
      deletBtn.innerHTML = "Delete";
      task.append(deletBtn);

      window.localStorage.setItem(task.id, task.innerHTML);

      document.querySelectorAll(".delete").forEach(function (a) {
        a.addEventListener("click", function (e) {
          this.parentElement.remove();
          window.localStorage.removeItem(this.parentElement.id);
        });
      });
    });
  } else {
    for (let j = 0; j < window.localStorage.length; j++) {
      arr.push(window.localStorage.key(j));
    }

    for (let i = 0; i < window.localStorage.length; i++) {
      let task = document.createElement("div");
      task.id = window.localStorage.key(i);
      task.classList.add("task");
      task.innerHTML = window.localStorage.getItem(window.localStorage.key(i));
      addedTasks.append(task);
    }

    document.querySelectorAll(".delete").forEach(function (a) {
      a.addEventListener("click", function (e) {
        this.parentElement.remove();
        window.localStorage.removeItem(this.parentElement.id);
      });
    });

    adding.addEventListener("click", function () {
      let task = document.createElement("div");
      task.id = Math.max(...arr);
      task.classList.add("task");
      task.innerHTML = taskName.value;
      addedTasks.append(task);

      let deletBtn = document.createElement("button");
      deletBtn.classList.add("delete");
      deletBtn.innerHTML = "Delete";
      task.append(deletBtn);

      window.localStorage.setItem(`${Number(task.id) + 1}`, task.innerHTML);

      document.querySelectorAll(".delete").forEach(function (a) {
        a.addEventListener("click", function (e) {
          this.parentElement.remove();
          window.localStorage.removeItem(this.parentElement.id);
        });
      });
    });
  }
};
