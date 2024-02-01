"use strict";

// Declare variables
const inputBoxEl = document.querySelectorAll(".input-line");
const btnEl = document.querySelector(".btn");
const formElements = [
  {
    input: document.getElementById("first-name"),
    errorText: document.querySelector(".error-text--1"),
    errorIcon: document.querySelector(".icon--1"),
  },
  {
    input: document.getElementById("last-name"),
    errorText: document.querySelector(".error-text--2"),
    errorIcon: document.querySelector(".icon--2"),
  },
  {
    input: document.getElementById("email"),
    errorText: document.querySelector(".error-text--3"),
    errorIcon: document.querySelector(".icon--3"),
  },
  {
    input: document.getElementById("password"),
    errorText: document.querySelector(".error-text--4"),
    errorIcon: document.querySelector(".icon--4"),
  },
];

// Refactored code
btnEl.addEventListener("click", function () {
  event.preventDefault();

  formElements.forEach(function (element) {
    const inputValue = String(element.input.value).trim();
    let isValid = true;

    if (inputValue === null || inputValue === "") {
      isValid = false;
      element.errorText.classList.remove("hidden");
      element.errorIcon.classList.remove("hidden");
      element.input.style.color = "hsl(0, 100%, 74%)";
      element.input.style.outline = "2px solid hsl(0, 100%, 74%)";
    } else {
      element.input.style.color = "rgb(10, 157, 93)";
      element.input.style.outline = "2px solid hsl(154, 59%, 51%)";
    }

    // Checking if email is in correct format using Regular Expression
    let emailValue;
    if (element.input.id === "email") {
      emailValue = String(document.getElementById("email").value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    if (!emailValue || emailValue === "") {
      isValid = false;
    }

    if (isValid) {
      element.input.style.color = "rgb(10, 157, 93)";
      element.input.style.outline = "2px solid hsl(154, 59%, 51%)";
    }
  });
});

// ///////////////////////////////////////////////////////////
// const firstNameEl = document.getElementById("first-name");
// const lastNameEl = document.getElementById("last-name");
// const emailEl = document.getElementById("email");
// const passwordEl = document.getElementById("password");
// const errorFirst = document.querySelector(".error-text--1");
// const errorLast = document.querySelector(".error-text--2");
// const errorEmail = document.querySelector(".error-text--3");
// const errorPassword = document.querySelector(".error-text--4");
// const errorIconFirst = document.querySelector(".icon--1");
// const errorIconSecond = document.querySelector(".icon--2");
// const errorIconEmail = document.querySelector(".icon--3");
// const errorIconPassword = document.querySelector(".icon--4");

// // Form Validation
// btnEl.addEventListener("click", function () {
//   event.preventDefault();
//   if (firstNameEl.value === null || firstNameEl.value === "") {
//     errorFirst.classList.remove("hidden");
//     errorIconFirst.classList.remove("hidden");
//     firstNameEl.style.outline = "2px solid hsl(0, 100%, 74%)";
//   } else {
//     firstNameEl.style.color = "rgb(10, 157, 93)";
//     firstNameEl.style.outline = "2px solid hsl(154, 59%, 51%)";
//   }

//   if (lastNameEl.value === null || lastNameEl.value === "") {
//     errorLast.classList.remove("hidden");
//     errorIconSecond.classList.remove("hidden");
//     lastNameEl.style.outline = "2px solid hsl(0, 100%, 74%)";
//   } else {
//     lastNameEl.style.color = "rgb(10, 157, 93)";
//     lastNameEl.style.outline = "2px solid hsl(154, 59%, 51%)";
//   }

//   const emailValue = String(emailEl.value)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );

//   if (!emailValue || emailValue.value === "") {
//     errorEmail.classList.remove("hidden");
//     errorIconEmail.classList.remove("hidden");
//     emailEl.style.color = "hsl(0, 100%, 74%)";
//     emailEl.style.outline = "2px solid hsl(0, 100%, 74%)";
//   } else {
//     emailEl.style.color = "rgb(10, 157, 93)";
//     emailEl.style.outline = "2px solid hsl(154, 59%, 51%)";
//   }

//   if (passwordEl.value === null || passwordEl.value === "") {
//     errorPassword.classList.remove("hidden");
//     errorIconPassword.classList.remove("hidden");
//     passwordEl.style.outline = "2px solid hsl(0, 100%, 74%)";
//   } else {
//     passwordEl.style.color = "rgb(10, 157, 93)";
//     passwordEl.style.outline = "2px solid hsl(154, 59%, 51%)";
//   }

//   // firstNameEl.value = "";
//   // lastNameEl.value = "";
//   // emailEl.value = "";
//   // passwordEl.value = "";
// });
