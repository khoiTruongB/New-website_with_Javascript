"use strict";

const inputF = document.getElementById("input-firstname");
const inputL = document.getElementById("input-lastname");
const inputName = document.getElementById("input-username");
const inputPa = document.getElementById("input-password");
const inputRepa = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");
/**Sự kiện nút đăng kí  */
btnSubmit.addEventListener("click", function () {
  const account = new User(
    inputF.value,
    inputL.value,
    inputName.value,
    inputPa.value
  );
  const validate = validateData(account);
  console.log(validate);
  if (validate) {
    userArr.push(account);
    alert("Đăng kí thành công");
    saveToStorage("userArr", userArr);
    window.location.href = "../pages/login.html";
  }
});

let check = true;
/**Hàm kiểm tra thông tin nhập vào form */
function validateData(account) {
  if (account.firstName.trim() === "") {
    alert("Không có trường nào bị bỏ trống");
    check = false;
    return;
  }
  if (account.lastName.trim() === "") {
    alert("Không có trường nào bị bỏ trống");
    check = false;
    return;
  }
  if (account.username.trim() === "") {
    alert("Không có trường nào bị bỏ trống");
    check = false;
    return;
  }
  if (account.password.trim() === "") {
    alert("Không có trường nào bị bỏ trống");
    check = false;
    return;
  }
  for (let i = 0; i < userArr.length; i++) {
    if (account.username === userArr[i].username) {
      alert("Username đã tồn tại");
      check = false;
      break;
    }
  }
  if (account.password.length <= 8) {
    alert("Password phải có nhiều hơn 8 ký tự");
    check = false;
    return;
  }
  if (account.password != inputRepa.value) {
    alert("Password và Confirm password phải giống nhau !");
    check = false;
    return;
  }

  return check;
}
