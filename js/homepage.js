function firstBlock() {
  document.querySelector(".men").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-men");
    drop.style.display = "block";
  });
  let drop = document.querySelector(".drop-men");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "block";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
    });
  });
  document.querySelector(".men").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-men");
    drop.style.display = "none";
  });
}
firstBlock();
function secondBlock() {
  document.querySelector(".women").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-women");
    drop.style.display = "block";
  });
  let drop = document.querySelector(".drop-women");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "block";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
    });
  });
  document.querySelector(".women").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-women");
    drop.style.display = "none";
  });
}
secondBlock();
function thirdBlock() {
  document.querySelector(".kids").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-kids");
    drop.style.display = "block";
  });
  let drop = document.querySelector(".drop-kids");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "block";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
    });
  });
  document.querySelector(".kids").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-kids");
    drop.style.display = "none";
  });
}
thirdBlock();
function fourthBlock() {
  document.querySelector(".home").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-home");
    drop.style.display = "block";
  });
  let drop = document.querySelector(".drop-home");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "block";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
    });
  });
  document.querySelector(".home").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-home");
    drop.style.display = "none";
  });
}
fourthBlock();
function fifthBlock() {
  document.querySelector(".beauty").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-beauty");
    drop.style.display = "block";
  });
  let drop = document.querySelector(".drop-beauty");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "block";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
    });
  });
  document.querySelector(".beauty").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-beauty");
    drop.style.display = "none";
  });
}
fifthBlock();
function sixthBlock() {
  document.querySelector(".studio").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-studio");
    drop.style.display = "block";
  });
  let drop = document.querySelector(".drop-studio");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "block";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
    });
  });
  document.querySelector(".studio").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-studio");
    drop.style.display = "none";
  });
}
sixthBlock();
