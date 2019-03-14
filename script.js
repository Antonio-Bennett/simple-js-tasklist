//UI vars
const form = document.querySelector("#task-form");
const tasklist = document.querySelector(".tasklist");
const clearTasks = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//load all event listeners
loadEventListeners();

function loadEventListeners() {
    form.addEventListener("submit", addTask);
}

// add a task
function addTask(e) {
    if(taskInput.value === "") {
        alert("No task name given.")
    } else {
        //create li elemement
        const li = document.createElement("li");
        li.className = "task";
        li.appendChild(document.createTextNode(taskInput.value));

        //create wrapping deleting link
        const delLink = document.createElement("a");
        delLink .className = "delete-task";
        delLink .innerHTML = "<i class=\"far fa-trash-alt\"></i>";

        //insert li into delition link
        li.appendChild(delLink );

        //append new task-item to list
        tasklist.appendChild(li)
        taskInput.value = "";

        e.preventDefault();
    }
}