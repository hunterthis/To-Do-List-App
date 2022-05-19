var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addItem = document.getElementById("add");
    addItem.onclick = main;
};
function main() {
    if (isValid()) {
        var item = getToDoItem();
        displayToDoItem(item);
    }
}
function isValid() {
    return true;
}
function getToDoItem() {
    var myItem = new ToDoItem();
    var titleInput = getInput("title");
    myItem.title = titleInput.value;
    var isCompleted = getInput("is-complete");
    myItem.isCompleted = isCompleted.checked;
    return myItem;
}
function getInput(id) {
    return document.getElementById(id);
}
function displayToDoItem(item) {
    var itemText = document.createElement("p");
    itemText.innerHTML = item.title;
    var itemDiv = document.createElement("div");
    itemDiv.setAttribute("data-task-title", item.title);
    itemDiv.onclick = toggleComplete;
    itemDiv.classList.add("todo");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }
    itemDiv.classList.add("todo");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    if (item.isCompleted) {
        var completedToDos = document.getElementById("complete-items");
        completedToDos.appendChild(itemDiv);
    }
    else {
        var incompleteToDos = document.getElementById("incomplete-items");
        incompleteToDos.appendChild(itemDiv);
    }
    function markAsComplete() {
        var itemDiv = this;
        itemDiv.classList.add("completed");
        console.log("Item div is:");
        console.log(itemDiv);
    }
    function toggleComplete() {
        var itemDiv = this;
        console.log("Item div is:");
        console.log(itemDiv);
        if (itemDiv.classList.contains("completed")) {
            itemDiv.classList.remove("completed");
            var incompleteItems = document.getElementById("incomplete-items");
            incompleteItems.appendChild(itemDiv);
        }
        else {
            itemDiv.classList.add("completed");
            var completedItems = document.getElementById("complete-items");
            completedItems.appendChild(itemDiv);
        }
        var allTodos = getToDoItem();
    }
}
