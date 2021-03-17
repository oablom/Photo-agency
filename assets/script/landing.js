"use strict";

const nav__list = document.getElementById("jsMenu");
const navBarToggle = document.getElementById("jsNavbarToggle");

navBarToggle.addEventListener("click", function () {
  nav__list.classList.toggle("active");
});
