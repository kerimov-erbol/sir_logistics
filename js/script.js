const menuBtn =document.querySelector(".header__burger-btn");
if(menuBtn){

    menulink =document.querySelectorAll(".header__nav-link") 
    menuBody =document.querySelector(".header__nav")

    menuBtn.addEventListener("click",function(e){
        menuBody.classList.toggle("header__nav--active")
    })
    for (let i = 0; i < menulink.length; i++) {
        menulink[i].addEventListener("click", function() {
            menuBody.classList.toggle("header__nav--active");
        });
    }
}

