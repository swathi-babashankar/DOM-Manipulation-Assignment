
// To change the button text to current date

Solution:

// Finding the element

document.querySelector(".btn-container");

// Targetting the inner text

document.querySelector(".btn-container .btn").innerText;

// storing the text

let date_time = document.querySelector(".btn-container .btn").innerText;

// Calling date()

date_time = new Date();