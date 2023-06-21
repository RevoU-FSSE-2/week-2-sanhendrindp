"use strict";

const hamburgerBtn = document.querySelector(".hamburger-menu input");
const topSlider = document.querySelector("nav ul");

hamburgerBtn.addEventListener("click", function () {
  topSlider.classList.toggle("top-slider");
});
