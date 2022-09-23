
// To append a new box called "My FAQ" in youtubesupport

Solution : 

    //  Creating Section Tag and creating ID

    const sec = document.createElement("section");
    sec.id = "12345";
    document.body.appendChild(sec);

    //  Creating <H3> and appending it to <section>

    const heading = document.createElement("h3");
    sec.appendChild(heading);

    //  Inserting text to <h3>

    const text = document.createTextNode("My New FAQ");
    heading.appendChild(text);

    //  Appending <section> to <body> 

    document.body.appendChild(sec);
