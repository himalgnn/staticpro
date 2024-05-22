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