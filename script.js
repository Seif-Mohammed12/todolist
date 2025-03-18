// Load saved tasks and theme
document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
    loadTheme();
  });
  
  // Add task
  document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
  
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Add a delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
        saveTasks();
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      // Clear the input field
      taskInput.value = '';
  
      // Save tasks
      saveTasks();
    } else {
      alert('Please enter a task!');
    }
  });
  
  // Save tasks to localStorage
  function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
      tasks.push(li.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Load tasks from localStorage
  function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
        saveTasks();
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }
  
  // Change theme
  function changeTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }
  
  // Load saved theme
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'theme-light-pink';
    document.body.className = savedTheme;
  }