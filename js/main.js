
// how to make class active in nav bars on scroll

window.addEventListener("scroll" ,event => {


let mYnavBar = document.querySelectorAll(".nav ul li a"),
    fromTop = window.scrollY;


    mYnavBar.forEach(link => {

        let nameHash = document.querySelector(link.hash);

        if (nameHash.offsetTop <= fromTop && 
            nameHash.offsetTop + nameHash.offsetHeight > fromTop) {

                link.classList.add("active");
        } else {
                link.classList.remove("active");
        }

    });
});



// smooth-scroll 

var scroll = new SmoothScroll('a[href*="#"]', {
    speed:1000,
    
})
var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});


// popup button 

let overlay = document.createElement("div");
    overlay.classList.add("pop-overlay" )
    document.body.appendChild(overlay);

    let mainbox = document.createElement("div");
    mainbox.classList.add("main-box");
   
    

    let h1 = document.createElement("h1"),
        text = document.createTextNode("Membership Form");
        h1.appendChild(text);
    mainbox.appendChild(h1);    

    // create form

    let form = document.createElement("form");
    
    let nameinput = document.createElement("input");
    nameinput.setAttribute("type","text") ;
    nameinput.setAttribute("placeholder","Mahmoud Haleem") ;
    nameinput.setAttribute("name","name") ;

        form.appendChild(nameinput);

    let emailinput = document.createElement("input");
        emailinput.setAttribute("type", "email");
        emailinput.setAttribute("placeholder", "mahmoudhaleem100@gmail.com");
        emailinput.setAttribute("name", "email");

            form.appendChild(emailinput);

    let phoneinput = document.createElement("input");
        phoneinput.setAttribute("type", "phone");
        phoneinput.setAttribute("placeholder", "123-456-7890");
        phoneinput.setAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}");
        phoneinput.setAttribute("name", "phone");
    
            form.appendChild(phoneinput);

    let textarea = document.createElement("textarea");
        textarea.setAttribute("cols", "40");
        textarea.setAttribute("rows", "5");
        textarea.setAttribute("placeholder", "Message");
        textarea.setAttribute("name", "message");
        
            form.appendChild(textarea);           
            
    let button = document.createElement("button"),
        buttText = document.createTextNode("Submit Button");
        button.appendChild(buttText);
        
        button.setAttribute("type", "submit");
        button.setAttribute("name", "submit");
            
            form.appendChild(button);


    let checkdiv = document.createElement("div");
    checkdiv.classList.add("checkdiv")
    form.appendChild(checkdiv);
    
    let checkbox = document.createElement("input");
        
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "checkbox");
        checkbox.setAttribute("id", "checkbox");
            
        checkdiv.appendChild(checkbox); 

    let checkboxlabel = document.createElement("label"),
        labeltext = document.createTextNode("I agree to the");
        checkboxlabel.appendChild(labeltext);
        
        checkboxlabel.setAttribute("for", "checkbox");
        
        checkdiv.appendChild(checkboxlabel); 

    let alink = document.createElement("a"),
        alinktext = document.createTextNode(" Terms &Conditions");
        alink.appendChild(alinktext);
        
        alink.setAttribute("href", "#");
        
        checkdiv.appendChild(alink);             
    

    mainbox.appendChild(form);

    let closeicon = document.createElement("i");
        closeicon.classList.add("fa", "fa-times");

        mainbox.appendChild(closeicon);

    document.body.appendChild(mainbox);

let butt = document.querySelector(".get-start .left span");

butt.addEventListener("click", (e) => {

  overlay.style.display = "block";
  mainbox.style.display = "block";

});

document.addEventListener("click", (e) => {

    if(overlay.style.display == "block" && mainbox.style.display == "block") {
        
        if (  e.target == closeicon || e.target == overlay) {
            overlay.style.display = "none";
            mainbox.style.display = "none";
        }
    }
    
});






