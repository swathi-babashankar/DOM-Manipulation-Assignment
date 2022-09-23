
// To change the 'Buy Now' button to 'Check Out'

Solution : 

// Finidng the element by targetting class

let check = document.getElementsByClassName("diwali-deals-product-sale btn");

// To set ID and Value to the the button

check[0].setAttribute("id" , "2343");

// To check whether the given ID is present

check[0];

// To change the button text

check[0].innerText = "Check Out";
