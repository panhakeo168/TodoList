const container = document.querySelector(".container");
const countItem = document.querySelector(".count-item");

document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector(".add");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  ul.className = "list-container";
  container.insertBefore(ul, countItem);
  addBtn.addEventListener("click", addTask);
  ul.addEventListener("click", handelTask);
  console.dir(ul);
  showTaskCount();
  displayData();
});
function addTask(event) {
  event.preventDefault();
  const input = document.querySelector(".input");
  const newTask = input.value.trim();
  if (!newTask) {
    alert("please input your name...");
  } else {
    const ul = document.querySelector(".list-container");
    const li = document.createElement("li");
    ul.append(li);
    li.innerHTML = `${input.value}<i class="fa-solid fa-circle-xmark"></i>`;
  }
  input.value = "";
  showTaskCount();
  Handeldata();
}
function handelTask(event) {
  const ul = document.querySelector(".list-container");
  const li = document.createElement("li");
  console.dir(event.target);

  if (event.target.tagName === "I") {
    event.target.parentElement.remove();
    showTaskCount();
    Handeldata();
  }
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
    Handeldata();
  }
}
function clearallTask() {
  const ul = document.querySelector(".list-container");
  ul.innerHTML = "";
  showTaskCount();
  Handeldata();
}
function showTaskCount() {
  // childelementcunt for count item in ul
  const ul = document.querySelector(".list-container").childElementCount;
  countItem.textContent = `There ${ul > 1 ? "are" : "is"} ${ul} task${ul > 1 ? "s" : ""}.`;
}
// store data in localstorage
function Handeldata() {
  const ul = document.querySelector(".list-container");
  localStorage.setItem("Data", ul.innerHTML);
  console.dir(ul);
}
function displayData() {
  const ul = document.querySelector(".list-container");
  ul.innerHTML = localStorage.getItem("data");
}

// train
// const container = document.querySelector(".container");
// const countItem = document.querySelector(".count-item");

// document.addEventListener("DOMContentLoaded", function () {
//   const addBtn = document.querySelector(".add");
//   const ul = document.createElement("ul");
//   ul.className = "list-container";
//   const li = document.createElement("li");
//   container.insertBefore(ul, countItem);
//   addBtn.addEventListener("click", addTask);
//   ul.addEventListener("click", handelTask);
//   displayData();
//   handelCount();
// });
// function addTask(event) {
//   event.preventDefault();
//   const input = document.querySelector(".input");
//   const newTask = input.value.trim();
//   if (!newTask) {
//     alert("please input your name....");
//   } else {
//     const ul = document.querySelector(".list-container");
//     const li = document.createElement("li");
//     li.innerHTML = `${input.value} <i class="fa-solid fa-circle-xmark"></i>`;
//     ul.appendChild(li);
//   }
//   input.value = "";
//   handelCount();
//   storData();
// }
// function clearallTask() {
//   const ul = document.querySelector(".list-container");
//   ul.innerHTML = "";
//   handelCount();
//   storData();
// }
// function handelTask(event) {
//   const ul = document.querySelector(".list-container");
//   const li = document.createElement("li");
//   console.dir(event.target);
//   if (event.target.tagName === "I") {
//     event.target.parentElement.remove();
//     handelCount();
//     storData();
//   }
//   if (event.target.tagName === "LI") {
//     event.target.classList.toggle("completed");
//     handelCount();
//     storData();
//   }
// }
// function handelCount() {
//   const ul = document.querySelector(".list-container").childElementCount;
//   countItem.innerHTML = `There ${ul > 1 ? "are" : "is"} ${ul} task${ul > 1 ? "s" : ""}.`;
// }
// function storData() {
//   const ul = document.querySelector(".list-container");
//   localStorage.setItem("Data", ul.innerHTML);
// }
// function displayData() {
//   const ul = document.querySelector(".list-container");
//   localStorage.getItem("Data");
// }
