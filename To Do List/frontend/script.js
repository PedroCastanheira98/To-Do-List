document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskInput = document.getElementById('task-input').value;
        const dateInput = document.getElementById('date-input').value;
        const timeInput = document.getElementById('time-input').value;

        addTask(taskInput, dateInput, timeInput);

        taskForm.reset();
    });

    function addTask(task, date, time) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        taskItem.innerHTML = `
            ${task} - ${date} ${time}
            <button onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(taskItem);
    }

    window.deleteTask = function(button) {
        const taskItem = button.parentElement;
        taskList.removeChild(taskItem);
    }
});