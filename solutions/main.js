// Data Structures

class Book {
  constructor(title) {
    this.title = title
  }
}

class Library {
  constructor() {
    this.books = []
  }
}

const library = new Library()

// User Interface
const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".close") 


function modalOpen() {
  console.log("Modal opened")
  modal.style.display = "flex";
}

function modalClose() {
  console.log("Modal closed")
  modal.style.display = "none";
}

closeButton.addEventListener("click", modalClose)
