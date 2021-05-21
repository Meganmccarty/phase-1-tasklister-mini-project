document.addEventListener("DOMContentLoaded", () => {
    
    // Variables to hold existing HTML elements
    const tasks = document.getElementById('tasks');
    const form = document.getElementsByTagName('form')[0];
    const input = document.querySelector('input');
    const listDiv = document.getElementById('list');
    const dropDown = document.querySelector('select');

    // Event listener for submitting the form
    form.addEventListener('submit', function(event) {

        // Variables to hold newly created HTML elements
        const listItem = document.createElement('li');
        const listItemPriority = document.createElement('span');
        const listItemText = document.createElement('span');
        const checkbox = document.createElement('input');
        const deleteButton = document.createElement('button');

        // Check if anything has been typed in input field
        // If so, add the item to the To Do list after submitting the form
        if (input.value) {

            // Switch statement for the priority level selected
            switch (dropDown.value) {
                case 'High':
                    listItemPriority.textContent = 'High';
                    listItemPriority.style.backgroundColor = 'red';
                    break;
                case 'Mid':
                    listItemPriority.textContent = 'Mid';
                    listItemPriority.style.backgroundColor = 'orange';
                    break;
                case 'Low':
                    listItemPriority.textContent = 'Low';
                    listItemPriority.style.backgroundColor = 'yellow';
            }

            // Define text content and class names for newly created elements
            listItemPriority.className = 'priority';
            listItemText.className = 'text';
            listItemText.textContent = input.value;
            checkbox.type = 'checkbox';
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';

            // Append elements to inside li element
            listItem.appendChild(listItemPriority);
            listItem.appendChild(listItemText);
            listItem.appendChild(checkbox);
            listItem.appendChild(deleteButton);

            // Append li element to ul element
            tasks.appendChild(listItem);
        }

        // Reset input value to blank
        input.value = '';

        // Prevent the page from reloading when form is submitted
        event.preventDefault();
    });

    // Event listener for whether checkbox or delete button clicked
    listDiv.addEventListener('click', function(event) {
        if (event.target.className === 'delete') {
            deleteTask(event);
        } else if (event.target.type === 'checkbox') {
            completeTask(event);
        }
    })

    // Function for deleting a task
    function deleteTask(event) {
        const taskItem = event.target.parentNode;
        taskItem.remove();
    }

    // Function for marking a task completed
    function completeTask(event) {

        // Variables for holding li and span elements
        const taskItem = event.target.parentNode;
        const taskItemText = taskItem.querySelector('span.text');
        
        // Task appearance changes based on checkbox input
        if (taskItemText.style.textDecoration === 'line-through') {
            taskItemText.style.textDecoration = 'none';
            taskItemText.style.backgroundColor = 'rgb(255, 255, 255)';
        } else {
            taskItemText.style.textDecoration = 'line-through';
            taskItemText.style.backgroundColor = 'rgba(51, 255, 0, 0.5)';
        }
        
    }
});
