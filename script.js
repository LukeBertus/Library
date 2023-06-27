const body = document.querySelector("body")
const newBook = document.querySelector(".newBook")
const global = document.querySelector(".global")
const formContainer = document.querySelector(".formContainer")
const addBook = document.querySelector(".add")

newBook.addEventListener('click', appendForm)

function appendForm() {
    formContainer.classList.add("show");
    global.classList.add("overlay");
}

document.addEventListener('click', e => {
  if (!formContainer.contains(e.target) && !newBook.contains(e.target)) {
    console.log(e.target)
    formContainer.classList.remove("show")
    global.classList.remove("overlay")
  }
})

addBook.addEventListener('click', addBookToLibrary)

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary(event) {
  event.preventDefault();

  const titleInput = document.querySelector("#title")
  const authorInput = document.querySelector("#author")
  const pagesInput = document.querySelector("#pages")
  const readInput = document.querySelector("#read")

  let title = titleInput.value 
  let author = authorInput.value
  let pages = pagesInput.value
  let readStatus = readInput.value

  formContainer.classList.remove("show")
  global.classList.remove("overlay")
}

function displayBooks () {

}

function generateBook() {

}