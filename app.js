"use strict";

// Declare variables
const inputBoxEl = document.querySelectorAll(".input-line");
const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const btnEl = document.querySelector(".btn");
const errorFirst = document.querySelector(".error-text--1");
const errorLast = document.querySelector(".error-text--2");
const errorEmail = document.querySelector(".error-text--3");
const errorPassword = document.querySelector(".error-text--4");
const errorIconFirst = document.querySelector(".icon--1");
const errorIconSecond = document.querySelector(".icon--2");
const errorIconEmail = document.querySelector(".icon--3");
const errorIconPassword = document.querySelector(".icon--4");

// Form Validation
btnEl.addEventListener("click", function () {
  event.preventDefault();
  if (firstNameEl.value === null || firstNameEl.value === "") {
    errorFirst.classList.remove("hidden");
    errorIconFirst.classList.remove("hidden");
  }

  if (lastNameEl.value === null || lastNameEl.value === "") {
    errorLast.classList.remove("hidden");
    errorIconSecond.classList.remove("hidden");
  }

  const emialValue = String(emailEl.value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (!emialValue || emialValue.value === "") {
    errorEmail.classList.remove("hidden");
    errorIconEmail.classList.remove("hidden");
  }

  if (passwordEl.value === null || passwordEl.value === "") {
    errorPassword.classList.remove("hidden");
    errorIconPassword.classList.remove("hidden");
  }
});
