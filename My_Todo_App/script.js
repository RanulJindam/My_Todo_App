const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let editToDo = null;

// Add ToDo :-
const addToDo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0){
        alert("You Must Write Something in Your ToDo");
        return false;
    } else if (addBtn.value === "Edit"){
        editToDo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    } else {
        // creating P tag :-
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);
        
        // creating EditBtn :-
        const editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("btn","editBtn");
        li.appendChild(editBtn);
        
        // creating DeleteBtn :-
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add("btn","removeBtn");
        li.appendChild(removeBtn);
        
        todoList.appendChild(li);
        inputBox.value = "";
    }
    
}

// Update ToDo :-
const updateToDo = (e) => {
    if (e.target.innerHTML === "Remove"){
        todoList.removeChild(e.target.parentElement);
    }
    if (e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editToDo = e;
    }
}
addBtn.addEventListener('click', addToDo);
todoList.addEventListener('click',updateToDo);