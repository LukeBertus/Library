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
    container.classList.add("container")
    container.classList.add('container' + (myLibrary.indexOf(e)+1))

    const title = document.createElement('p')
    const backgroundColor = document.createElement('div')
    backgroundColor.classList.add("backgroundColor")
    title.classList.add("bookTitle")
    title.textContent = e.title

    const author = document.createElement('p')
    author.classList.add("bookAuthor")
    author.textContent = "By " + e.author

    const pages = document.createElement('p')
    pages.classList.add("bookpages")
    pages.textContent = "Pages: " + e.pages


    const readContainer = document.createElement('div')
    const readStatus = document.createElement('label')
    const readCheckbox = document.createElement('input')
    readContainer.classList.add("readContainer")
    readStatus.classList.add("bookReadStatus")
    readCheckbox.classList.add("bookReadCheckbox")
    readStatus.textContent = "Read:"
    readCheckbox.id = "checkbox"
    readStatus.for = "checkbox"
    readCheckbox.type = "checkbox"
    
    const iconContainer = document.createElement('div')
    iconContainer.classList.add('iconContainer')
    const edit = document.createElement('img')
    edit.setAttribute('src', 'images/file-edit.svg')
    edit.classList.add('edit')
    const trash = document.createElement('img')
    trash.classList.add('trash')
    trash.classList.add('trash' + (myLibrary.indexOf(e)+1))

    trash.src = "images/trash-can.svg"

    content.appendChild(container)
    container.appendChild(backgroundColor)
    backgroundColor.appendChild(title)
    container.appendChild(author)
    container.appendChild(pages)
    container.appendChild(readContainer)
    readContainer.appendChild(readStatus)
    readContainer.appendChild(readCheckbox)
    container.appendChild(iconContainer)
    iconContainer.appendChild(edit)
    iconContainer.appendChild(trash)
    console.log(myLibrary.indexOf(e))

    trash.addEventListener('click', e => {
      container.remove();
      myLibrary.splice(myLibrary.indexOf(e), 1)
    })
  })

  }


function generateBook() {
  let book = new Book("Harry Potter", "J.K.R", 463, "on")
  myLibrary[0] = book
  displayBooks();
}

generateBook();

