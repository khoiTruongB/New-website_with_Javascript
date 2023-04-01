"use strict";
const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");

const welcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

displayHome();
/**Hàm hiển thị welcom trong trang home */
function displayHome() {
  /**Kiểm tra người dùng có đăng nhập chưa */
  if (currentUser) {
    loginModal.style.display = "none";
    mainContent.style.display = "block";

    welcomeMessage.textContent = `Welcome ${currentUser.username}`;
  } else {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}
/**Sự kiện đăng xuất  */
btnLogout.addEventListener("click", function () {
  const isLogout = confirm("Bạn chắc chắn muốn Logout chứ?");
  if (isLogout) {
    currentUser = null;
    saveToStorage("currentUser", currentUser);
    displayHome();
  }
});
