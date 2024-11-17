// Get references to DOM elements
const inputField = document.getElementById('Store-item');
const todoList = document.getElementById('todo-list');

// Function to add a new item to the list
function addItem() {
    const itemText = inputField.value.trim(); // Get the input text and remove extra spaces

    if (itemText === '') {
        alert('Please enter a store item!');
        return; // Exit if input is empty
    }

    // Create a new list item (li)
    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    // Create a delete button for the item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';

    // Attach a click event to the delete button
    deleteButton.onclick = function () {
        todoList.removeChild(listItem);
    };

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Add the list item to the to-do list
    todoList.appendChild(listItem);

    // Clear the input field for the next item
    inputField.value = '';
}
