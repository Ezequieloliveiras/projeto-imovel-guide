let openModalBtn = document.getElementById("openModalBtn")
let modal = document.getElementById("myModal")
let closeModalBtn = document.querySelector(".close")

openModalBtn.addEventListener("click", function() {
  modal.style.display = "block"
})


closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none"
})

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
})