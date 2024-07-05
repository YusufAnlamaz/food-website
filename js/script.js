const searchForm = document.querySelector(".search-form")
const cartItem = document.querySelector(".cart-items-container")
const navBar = document.querySelector(".navbar")
// buttons

const searchBtn = document.querySelector("#search-btn")
const cartBtn = document.querySelector("#cart-btn")
const menuBtn = document.querySelector("#menu-btn")

searchBtn.addEventListener("click" , function(){
    searchForm.classList.toggle("active")
    document.addEventListener("click" , function(e){
        if(
            !e.composedPath().includes(searchForm) &&
            !e.composedPath().includes(searchBtn)
            ) {
            searchForm.classList.remove("active");
        }
    } )
} );
cartBtn.addEventListener("click" , function(){
    cartItem.classList.toggle("active")
    document.addEventListener("click" , function(e){
        if(
            !e.composedPath().includes(cartItem) &&
            !e.composedPath().includes(cartBtn)
            ) {
            cartItem.classList.remove("active");
        }
    } )
} );
menuBtn.addEventListener("click" , function(){
    navBar.classList.toggle("active")
    document.addEventListener("click" , function(e){
        if(
            !e.composedPath().includes(navBar) &&
            !e.composedPath().includes(menuBtn)
            ) {
            navBar.classList.remove("active");
        }
    } )
} );