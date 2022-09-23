
// To align the text of dell from left to right

Solution: 

// Finding the element

document.querySelectorAll(".ps-title")

// Storing the element in a variable

let name = document.querySelectorAll(".ps-title")

// Targetting the element from 4th index of an array and changing the text direction to right

name[4].style.textAlign = "right";

