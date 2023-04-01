"use strict";
const btnAdd = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");
const inputTask = document.getElementById("input-task");
if (currentUser) {
  renderTask();
  /**Hàm hiểm thị danh sách Task */
  function renderTask() {
    let row = "";

    todoArr
      .filter((todo) => todo.owner === currentUser.username)
      .forEach(function (todo) {
        row += `
          <li class=${todo.isDone ? "checked" : ""}>
            ${todo.task}
            <span class="close">×</span>
          </li>
          `;
      });
    todoList.innerHTML = row;
    ToggleTask();
    deleteTask();
  }
  /**Sự kiện thêm Task */

  btnAdd.addEventListener("click", function () {
    if (inputTask.value.trim() === "") {
      alert("vui lòng nhập Task");
    } else {
      const task = new Task(inputTask.value, currentUser.username, false);

      todoArr.push(task);
      saveToStorage("todoArr", todoArr);
      renderTask();
      inputTask.value = "";
    }
  });
  /**Hàm đánh dấu danh sách Task */

  function ToggleTask() {
    document.querySelectorAll("#todo-list li").forEach(function (liEl) {
      liEl.addEventListener("click", function (e) {
        if (e.target !== liEl.children[0]) {
          liEl.classList.toggle("checked");
          const todo = todoArr.find(
            (toitem) =>
              toitem.owner === currentUser.username &&
              toitem.task ===
                liEl.textContent.trim().split("\n").slice(0, -1).toString()
          );
          todo.isDone = liEl.classList.contains("checked") ? true : false;

          saveToStorage("todoArr", todoArr);
          console.log(todo);
        }
      });
    });
  }
  /**Hàm xóa danh sách Task */

  function deleteTask() {
    document.querySelectorAll("#todo-list .close").forEach(function (clo) {
      clo.addEventListener("click", function () {
        const isdelete = confirm("Bạn có muốn xóa Task");
        if (isdelete) {
          const dete = todoArr.findIndex(
            (item) =>
              item.owner === currentUser.username &&
              item.task ===
                clo.parentElement.textContent
                  .trim()
                  .split("\n")
                  .slice(0, -1)
                  .toString()
          );

          todoArr.splice(dete, 1);
          console.log(todoArr.splice(dete, 1));
          saveToStorage("todoArr", todoArr);
          renderTask();
        }
      });
    });
  }
} else {
  alert("Hãy đăng nhập hoặc đăng kí để sử dung chứa năng này");
  window.location.href = "/index.html";
}
