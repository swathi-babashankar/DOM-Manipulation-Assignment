// Code to change the devto website title to change "iNeuron" and description to "I write Code".

Solution : 
    
    //  targetting the main div class and sub div classes to find the element

    document.querySelector(".side-bar .crayons-card .crayons-subtitle-2")

    // targetting the inner html of the class 

    document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML

    // Changing the text to iNeuron

    document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "iNeuron";
    
    // Changing the Description 

     document.querySelector(".side-bar .crayons-card p").innerHTML  = "I Write Code";
