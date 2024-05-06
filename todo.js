let addToDoButton = document.getElementById("addToDo");
let todoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

// Function to add todo
function addTodo() {
    // Create a new paragraph element
    let paragraph = document.createElement("p");

    // Create a checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Add a class to the checkbox for styling
    checkbox.classList.add("checkbox-styling");

    // Append the checkbox to the paragraph
    paragraph.appendChild(checkbox);

    // Add a class to the paragraph for styling
    paragraph.classList.add("paragraph-styling");

    // Set the text content of the paragraph to the value of the input field
    paragraph.appendChild(document.createTextNode(inputField.value));

    // Append the paragraph to the todoContainer
    todoContainer.appendChild(paragraph);

    // Create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "❌"; // You can use any symbol or text for the delete button

    // Add a class to the delete button for styling
    deleteButton.classList.add("delete-button");

    // Append the delete button to the paragraph
    paragraph.appendChild(deleteButton);

    // Clear the input field after adding the todo
    inputField.value = "";

    // Add event listener to the checkbox to toggle line-through style
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            paragraph.style.textDecoration = "line-through";
        } else {
            paragraph.style.textDecoration = "none";
        }
    });

    // Add event listener to the delete button to remove the paragraph
    deleteButton.addEventListener('click', function() {
        todoContainer.removeChild(paragraph);
    });
}

// Event listener for Enter key press
inputField.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) { // 13 is the keycode for Enter key
        addTodo();
    }
});

// Event listener for button click
addToDoButton.addEventListener('click', addTodo);
