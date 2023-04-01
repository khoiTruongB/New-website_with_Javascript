"use strict";
const inputCategory = document.getElementById("input-category");
const inputPagesize = document.getElementById("input-page-size");
const BtnSettings = document.getElementById("btn-submit");
if (currentUser) {
  BtnSettings.addEventListener("click", function () {
    const check = validateData();
    if (check) {
      currentUser.pageSize = inputPagesize.value;
      currentUser.category = inputCategory.value;
      saveToStorage("currentUser", currentUser);

      const use = userArr.findIndex(
        (uitem) => uitem.username === currentUser.username
      );
      userArr[use] = currentUser;
      saveToStorage("userArr", userArr);
      alert("Cài đặt thành công");
      inputCategory = "";
      inputPagesize = "";
    }
  });
  function validateData() {
    let check = true;
    if (inputPagesize.value.length === 0) {
      alert("Bạn chưa nhập số trang");
      check = false;
      return;
    }
    if (inputCategory.value === "General") {
      alert("Bạn chưa chọn Category !");
      check = false;
      return;
    }
    return check;
  }
}
