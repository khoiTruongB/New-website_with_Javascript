"use strict";

const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];

const userArr = users.map((user) => parseUser(user));

let currentUser = getFromStorage("currentUser")
  ? parseUser(getFromStorage("currentUser"))
  : null;

const todo = getFromStorage("todoArr") ? getFromStorage("todoArr") : [];
const todoArr = todo.map((tasks) => parseTask(tasks));

// hàm lưu data
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// hàm lấy data
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
/**hàm để chuyển từ JS Object sang Class Instance */
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.category
  );

  return user;
}
/**hàm để chuyển từ JS Object sang Class Instance */

function parseTask(todoData) {
  const tasks = new Task(todoData.task, todoData.owner, todoData.isDone);

  return tasks;
}
