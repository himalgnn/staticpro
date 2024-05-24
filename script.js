/*
    #1 JavaScript
    (Doesn't requires extra library file)

*/

var toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click",function(){
    if(this.nextElementSibling.classList.contains("expand")){
        this.nextElementSibling.classList.remove("expand");
    }else{
        this.nextElementSibling.classList.add("expand");
    }
})


console.log(toggleMenu);



/*
    #2 jQuery
    (Requires a jQuery library file on head of the document)

*/


// let accordDT = document.querySelector(".accordion dt");
//Syntax initiators : jQuery or $
let accordDt = jQuery(".accordion dt");
accordDt.on("click", function(){
    $(this).toggleClass('expand');
    // jQuery(this).siblings('dd').slideUp();
    // jQuery(this).next('dd').slideDown(300).siblings('dd').slideUp(500);
    $(this).next('dd').slideToggle(300);
});


/**
 * ## JavaScript Form validation scripts
 * ::JavaScript DOM element selectors  (use document key)
 * 
 * ie: document.selectorMethod("DOM_NODE_Identifier");
 * - SelectorMethods
 *      -getElementById("idname")
 *      -getElementsByClassName("classname")
 *      -getElementsByTagName("tagname")
 *      -querySelector("CSS Selector")
 *      -querySelectorAll("CSS_Selector")
 *      -form_name or form_name.field_name
 * 
 * 
 */


let formEle = document.contact_form;
console.log(formEle);
//let fName = document.contact_form.full_name;

let fName = formEle.fname,
    addr = formEle.address,
    email = formEle.email;

formEle.addEventListener("submit", function(e){
    if(fName.value==""){
        // alert("Full Name is required!");

        fName.nextElementSibling.innerText = "Full Name is required!";
        e.preventDefault(); //Stops page reload on form submit

    }
    if(addr.value==""){
        // alert("Address is required!");
        addr.nextElementSibling.innerText = "Address is required!";
        e.preventDefault(); //Stops page reload on form submit
        
    }
    if(email.value==""){
        // alert("E-mail is required!");
        email.nextElementSibling.innerText = "Email is required!";
        e.preventDefault(); //Stops page reload on form submit
    }
});

/**
 * JavaScript Events
 * - Window Event (i.e:onload)
 * - Form event (i.e: onsubmit);
 * - Keyboard event (ie.:onkeyup)
 * - Mouse event (i.e. onclick)
 */



email.addEventListener("keyup", function(){
    if(this.value.indexOf('@') == -1){
        this.nextElementSibling.innerText = "One '@' symbol is required";
    }else{
        this.nextElementSibling.innerText = "";
    }
});


/**
 * Study Regular Expression (RegEx)
 * - regexr.com (Recommended)
 * - rgex101.com etc.
 */