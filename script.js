document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");
  const searchTaskInput = document.getElementById("search-task");
  const themeToggle = document.getElementById("theme-toggle");

  // Function to add a task
  const addTask = (taskText) => {
    const li = document.createElement("li");

    // Create a span to hold the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Create edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "✎";
    editBtn.classList.add("edit-btn");

    // Add edit functionality
    editBtn.onclick = () => {
      const updatedText = prompt("Update your task", taskSpan.textContent);
      if (updatedText !== null && updatedText.trim() !== "") {
        taskSpan.textContent = updatedText.trim();
      }
    };

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-btn");

    // Add delete functionality
    deleteBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append buttons to list item
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(li);
  };

  // Add Task event
  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  // Search Task functionality
  searchTaskInput.addEventListener("input", () => {
    const searchText = searchTaskInput.value.toLowerCase();
    const tasks = taskList.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
      const taskText = tasks[i].textContent.toLowerCase();
      tasks[i].style.display = taskText.includes(searchText) ? "" : "none";
    }
  });

  // Dark/Light Mode Toggle
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });
});
