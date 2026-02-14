const taskInput = document.getElementById('task-input');
const taskTime = document.getElementById('task-time');
const taskCategory = document.getElementById('task-category');
const taskPriority = document.getElementById('task-priority');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');
const clearAllBtn = document.getElementById('clear-all');
const progressBar = document.getElementById('progress-bar');
const themeToggle = document.getElementById('theme-toggle');

// Request notifications
if ("Notification" in window) {
    Notification.requestPermission();
}

// Load tasks
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

// Helper: Convert 24-hour to 12-hour format with AM/PM
function formatTime12Hour(time24) {
    if (!time24) return "--";
    let [hour, minute] = time24.split(":").map(Number);
    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12; // 0 => 12
    return `${hour}:${minute.toString().padStart(2,"0")} ${ampm}`;
}

// Add task
addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    const time = taskTime.value;
    const category = taskCategory.value;
    const priority = taskPriority.value;
    if (text === '') return;

    tasks.push({ text, time, category, priority, completed: false });
    taskInput.value = '';
    taskTime.value = '';
    saveAndRender();
});

// Clear all
clearAllBtn.addEventListener('click', () => {
    tasks = [];
    saveAndRender();
});

// Toggle dark mode
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Render tasks
function renderTasks() {
    taskList.innerHTML = '';
    let completedCount = 0;

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.dataset.category = task.category;

        const span = document.createElement('span');
        span.textContent = `${task.text} (${formatTime12Hour(task.time)}) [${task.priority}]`;

        if (task.completed) {
            span.classList.add('completed');
            completedCount++;
        }

        span.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            saveAndRender();
        });

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveAndRender();
        });

        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });

    taskCounter.textContent = `${completedCount}/${tasks.length} tasks completed`;
    progressBar.style.width = tasks.length ? `${(completedCount/tasks.length)*100}%` : '0%';
}

// Save tasks
function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Check reminders every minute
setInterval(() => {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0,5);
    tasks.forEach(task => {
        if (!task.completed && task.time === currentTime) {
            if ("Notification" in window && Notification.permission === "granted") {
                new Notification(`Reminder: ${task.text}`);
            } else {
                alert(`Reminder: ${task.text}`);
            }
        }
    });
}, 60000);
