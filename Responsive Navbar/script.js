let hamburger = document.querySelector(".hamburger")
let navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

let navLink = document.querySelectorAll(".nav-link")

navLink.forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))