const body = document.querySelector("body")
const newBook = document.querySelector(".newBook")
const global = document.querySelector(".global")
const formContainer = document.querySelector(".formContainer")
const addBook = document.querySelector(".add")
const content = document.querySelector(".content")


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



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [];
let bookCount = 0;

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

  let book = new Book(title, author, pages, readStatus)
  console.log(book)
  myLibrary[bookCount] = book
  console.log(myLibrary)
  bookCount++;

  displayBooks()

  //cleanup
  formContainer.classList.remove("show")
  global.classList.remove("overlay")
}

function displayBooks () {
  myLibrary.forEach(e => {
    const container  = document.createElement('div')

    const title = document.createElement('p')
    title.classList.add("bookTitle")
    title.textContent = e.title

    const author = document.createElement('p')
    author.classList.add("bookAuthor")
    author.textContent = "By " + e.author

    const pages = document.createElement('p')
    pages.classList.add("bookpages")
    pages.textContent = "Pages: " + e.pages

    const read = document.createElement('input')
    read.classList.add("bookReadStatus")
    
    content.appendChild(container)
    container.appendChild(title)
    container.appendChild(author)
    container.appendChild(pages)
    
  })

  }


function generateBook() {

}