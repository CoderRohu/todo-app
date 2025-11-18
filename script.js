const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function saveTasks(){
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks(){
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}
loadTasks();

addBtn.addEventListener("click", () => {
  if(input.value.trim() === "") return;

  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = \`
    <span>\${input.value}</span>
    <button class="delete-btn">Delete</button>
  \`;

  taskList.appendChild(li);
  input.value = "";
  saveTasks();
});

taskList.addEventListener("click", e => {
  if(e.target.classList.contains("delete-btn")){
    e.target.parentElement.remove();
    saveTasks();
  }
});