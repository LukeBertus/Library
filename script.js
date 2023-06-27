const body = document.querySelector("body")
const newBook = document.querySelector(".newBook")
const global = document.querySelector(".global")
const formContainer = document.querySelector(".formContainer")

newBook.addEventListener('click', appendForm)

function appendForm() {
    formContainer.classList.add("show");
    global.classList.add("overlay");
}





let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks () {

}

function generateBook() {

}