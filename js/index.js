function firstBlock() {
  document.querySelector(".men").addEventListener("mouseover", () => {
    document.querySelector(".men").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
    let drop = document.querySelector(".drop-men");
    drop.style.display = "flex";
    drop.style.width = "60%";
    drop.style.justifyContent = "space-around";
  });
  let drop = document.querySelector(".drop-men");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";
    document.querySelector(".men").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".men").style.borderBottom = "none";
    });
  });
  document.querySelector(".men").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-men");
    drop.style.display = "none";
    document.querySelector(".men").style.borderBottom = "none";
  });
}
firstBlock();
function secondBlock() {
  document.querySelector(".women").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-women");
    drop.style.display = "flex";
    drop.style.width = "60%";
    drop.style.justifyContent = "space-around";
    document.querySelector(".women").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
  });
  let drop = document.querySelector(".drop-women");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";
    document.querySelector(".women").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".women").style.borderBottom = "none";
    });
  });
  document.querySelector(".women").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-women");
    drop.style.display = "none";
    document.querySelector(".women").style.borderBottom = "none";
  });
}
secondBlock();
function thirdBlock() {
  document.querySelector(".kids").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-kids");
    drop.style.display = "flex";
    drop.style.width = "60%";
    drop.style.justifyContent = "space-around";
    document.querySelector(".kids").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
  });
  let drop = document.querySelector(".drop-kids");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";
    document.querySelector(".kids").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".kids").style.borderBottom = "none";
    });
  });
  document.querySelector(".kids").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-kids");
    drop.style.display = "none";
    document.querySelector(".kids").style.borderBottom = "none";
  });
}
thirdBlock();
function fourthBlock() {
  document.querySelector(".home").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-home");
    drop.style.display = "flex";
    drop.style.width = "60%";
    drop.style.justifyContent = "space-around";
    document.querySelector(".home").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
  });
  let drop = document.querySelector(".drop-home");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";
    document.querySelector(".home").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".home").style.borderBottom = "none";
    });
  });
  document.querySelector(".home").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-home");
    drop.style.display = "none";
    document.querySelector(".home").style.borderBottom = "none";
  });
}
fourthBlock();
function fifthBlock() {
  document.querySelector(".beauty").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-beauty");
    drop.style.display = "flex";
    drop.style.width = "60%";
    drop.style.justifyContent = "space-around";
    document.querySelector(".beauty").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
  });
  let drop = document.querySelector(".drop-beauty");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "flex";
    document.querySelector(".beauty").style.borderBottom =
      "5px solid rgb(6, 47, 109)";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
      document.querySelector(".beauty").style.borderBottom = "none";
    });
  });
  document.querySelector(".beauty").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-beauty");
    drop.style.display = "none";
    document.querySelector(".beauty").style.borderBottom = "none";
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
function seventhBlock() {
  document.querySelector(".profile").addEventListener("mouseover", () => {
    let drop = document.querySelector(".drop-profile");
    drop.style.display = "block";
  });
  let drop = document.querySelector(".drop-profile");
  drop.addEventListener("mouseover", function () {
    drop.style.display = "block";
    drop.addEventListener("mouseout", function () {
      drop.style.display = "none";
    });
  });
  document.querySelector(".profile").addEventListener("mouseout", () => {
    let drop = document.querySelector(".drop-profile");
    drop.style.display = "none";
  });
}
seventhBlock();
