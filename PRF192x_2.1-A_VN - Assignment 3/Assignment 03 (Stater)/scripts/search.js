"use strict";
const BtnSearch = document.getElementById("btn-submit");
const inputQuery = document.getElementById("input-query");
const NewsList = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");

let total = 0;
let key = "";
BtnSearch.addEventListener("click", function () {
  if (inputQuery.value.trim() === "") {
    alert("Bạn chưa nhập từ khóa nào ");
  } else {
    key = inputQuery.value;
    getNew(key, "1");
  }
});
/**Hàm lấy tin tức theo key tìm kiếm đc nhập  */
async function getNew(key, page) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${key}&language=en&pageSize=${currentUser.pageSize}&page=${page}&apiKey=e72c2af3e0964740bf9ed003b4ad5add`
    );
    const data = await res.json();

    showNews(data);
  } catch (error) {
    console.log(error);
  }
}
/**Hàm hiển thị tin tức */
function showNews(data) {
  total = data.totalResults;

  checkbtnPrev();
  checkbtnNext();

  let row = "";
  data.articles.forEach((art) => {
    row += `
    <div class="card flex-row flex-wrap">
  				<div class="card mb-3" style="">
  					<div class="row no-gutters">
  						<div class="col-md-4">
  							<img src=${art.urlToImage ? art.urlToImage : "no-img.png"}
  								class="card-img"
  								alt="">
  						</div>
  						<div class="col-md-8">
  							<div class="card-body">
  								<h5 class="card-title">${art.title}</h5>
  								<p class="card-text">${art.description}</p>
  								<a href="${art.url}">View</a>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
    `;
  });
  NewsList.innerHTML = row;
}
/**Hàm kiểm tra nút pre */
function checkbtnPrev() {
  if (pageNum.textContent === "1") {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }
}
/**Hàm kiểm tra nút next */
function checkbtnNext() {
  if (pageNum.textContent == Math.round(total / 5)) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}
/**Sự kiện nút pre */
btnPrev.addEventListener("click", function () {
  getNew(key, --pageNum.textContent);
});
/**Sự kiện nút next */
btnNext.addEventListener("click", function () {
  getNew(key, ++pageNum.textContent);
});
