const body = document.querySelector("body")
const newBook = document.querySelector(".newBook")
const global = document.querySelector(".global")

newBook.addEventListener('click', appendForm)

function appendForm() {
    let formContainer = document.createElement('div');
    formContainer.classList.add("formContainer")
    body.appendChild(formContainer);
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