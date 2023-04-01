"use strict";
const inputName = document.getElementById("input-username");
const inputPa = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

/**Sự kiện nút đăng nhập */
btnSubmit.addEventListener("click", function () {
  const check = validateData();
  console.log(check);
  if (check) {
    /**Tìm use trong userarr */
    const user = userArr.find(
      (item) =>
        item.username === inputName.value && item.password === inputPa.value
    );
    console.log(user);

    if (user) {
      console.log(user);
      saveToStorage("currentUser", user);
      alert("Đăng nhập thành công !");
      window.location.href = "/index.html";
    } else {
      alert("Thông tin đăng nhập không đúng, Vui lòng nhập lại !");
    }
  }
});

function validateData() {
  let check = true;
  if (inputName.value === "") {
    alert("Không có trường nào bị bỏ trống");
    check = false;
    return;
  }
  if (inputPa.value === "") {
    alert("Không có trường nào bị bỏ trống");
    check = false;
    return;
  }
  return check;
}
