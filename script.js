"use strict";

const slider = document.querySelector("nav ul");
const hamburgerBtn = document.querySelector(".hamburger-menu input");

hamburgerBtn.addEventListener("click", function () {
  slider.classList.toggle("active");
});
