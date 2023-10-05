// JavaScript para mostrar/ocultar o menu de hambúrguer
const mobileMenuIcon = document.getElementById("mobile-menu-icon")
const mobileMenu = document.getElementById("mobile-menu")
const mobileMenuSecond = document.getElementById("mobile-menu-second")


mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show")
})

mobileMenuIcon.addEventListener("click", () => {
    mobileMenuSecond.classList.toggle("show")
})