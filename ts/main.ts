class ToDoItem {
  title: string;
  dueDate: Date;
  isCompleted: boolean;
}
window.onload = function () {
  let addItem = document.getElementById("add");
  addItem.onclick = main; // when additem is clicked we run process function
};

function main() {
  // tries to add
  if (isValid()) {
    let item = getToDoItem();
    displayToDoItem(item);
  }
}

function isValid() {
  // throws some good validation codes
  return true;
}
function getToDoItem(): ToDoItem {
  let myItem = new ToDoItem();

  let titleInput = getInput("title");
  myItem.title = titleInput.value;

  let isCompleted = getInput("is-complete");
  myItem.isCompleted = isCompleted.checked;

  return myItem;
}

function getInput(id): HTMLInputElement {
  return <HTMLInputElement>document.getElementById(id);
}

function displayToDoItem(item: ToDoItem): void {
  let itemText = document.createElement("p");
  itemText.innerHTML = item.title;

  let itemDiv = document.createElement("div");
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
    let completedToDos = document.getElementById("complete-items");
    completedToDos.appendChild(itemDiv);
  } else {
    let incompleteToDos = document.getElementById("incomplete-items");
    incompleteToDos.appendChild(itemDiv);
  }


  function markAsComplete() {
    let itemDiv = <HTMLElement>this;
    itemDiv.classList.add("completed");
    console.log("Item div is:");
    console.log(itemDiv);
  }
  function toggleComplete(){
    let itemDiv = <HTMLElement>this;
    console.log("Item div is:");
    console.log(itemDiv);

    if(itemDiv.classList.contains("completed")){
        // Remove complete class if previously marked as completed
        itemDiv.classList.remove("completed");
        let incompleteItems = document.getElementById("incomplete-items");
        incompleteItems.appendChild(itemDiv);
    }
    else{
        // Add completed item to complete-items div
        itemDiv.classList.add("completed");
        let completedItems = document.getElementById("complete-items");
        completedItems.appendChild(itemDiv);
    }

    let allTodos = getToDoItem();
   
    }
}
