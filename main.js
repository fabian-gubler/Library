// User Interface
const button = document.getElementById("button")
const modal = document.getElementById("modal")
const closeButton = document.querySelector(".closeButton")

// Interactive
button.addEventListener("click", modalOpen)
closeButton.addEventListener("click", modalClose)

function modalOpen () {
  console.log("Modal Opened")
  modal.style.display = "flex";
} 

function modalClose () {
  console.log("Modal Closed")
  modal.style.display = "none";
} 
