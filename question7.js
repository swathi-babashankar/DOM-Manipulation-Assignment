
// To extract the canon logo image source 

Solution:

// Finding the element

document.querySelector(".navbar-brand");

// Storing the element

let logo = document.querySelector(".navbar-brand").innerHTML;

// Extracting the image source

logo.src;