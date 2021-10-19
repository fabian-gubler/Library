// Data Structures
let myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

let testBook = new Book("Hobbit", "Jackson", "200", "Read")
myLibrary.push(testBook)

console.log(myLibrary)


// User Interface
const button = document.getElementById("button")
const modal = document.getElementById("modal")
const closeButton = document.querySelector(".closeButton")
const submitButton = document.getElementById("submit")

// Interactive
button.addEventListener("click", modalOpen)
closeButton.addEventListener("click", modalClose)
submitButton.onsubmit = submitBook

function modalOpen () {
  console.log("Modal Opened")
  modal.style.display = "flex";
} 

function modalClose () {
  console.log("Modal Closed")
  modal.style.display = "none";
} 

function submitBook () {
  console.log("Book submitted")
  modal.style.display = "none";
}
