let gorevListesi = [];
if (localStorage.getItem("gorevListesi") !== null) {
  gorevListesi = JSON.parse(localStorage.getItem("gorevListesi"));
}

let taskInput = document.querySelector("#txtTaskName");
let taskInputc = document.querySelector("#txtTaskName-c");

displayTasks();

function displayTasks() {
  let ul = document.getElementById("task-list");
  ul.innerHTML = "";

  for (let gorev of gorevListesi) {
    let li = `
            <li>
            <div class="row-card">
            <h2>${gorev.name}</h2>
            <h5>${gorev.count}</h5>
            <button class="sud" onclick='editTask(${gorev.id},${gorev.count})' id="sub-${gorev.id}">eksilt</button>
            </div>
             </li>
            `;

    ul.insertAdjacentHTML("beforeend", li);
  }
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document
  .querySelector("#btnAddNewTask")
  .addEventListener("keypress", function () {
    if (event.key == "Enter") {
      document.getElementById("btnAddNewTask").click();
    }
  });

function newTask(event) {
  if (taskInput.value == "") {
    alert("görev girmelisiniz");
  } else {
    gorevListesi.push({
      id: gorevListesi.length + 1,
      name: taskInput.value,
      count: taskInputc.value,
    });

    taskInput.value = "";
    taskInputc.value = "";
    localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
    displayTasks();
  }

  event.preventDefault();
}
function editTask(taskId, taskCount) {
  for (let i = 0; i < gorevListesi.length; i++) {
    if (gorevListesi[i].id == taskId) {
      gorevListesi[i].count = taskCount - 1;
      console.log(gorevListesi[i].count);
      break;
    }
  }
  localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
  displayTasks();
}
