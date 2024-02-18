// Modal related
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("aside > button");
const closeButton = document.querySelector("dialog button");
const createButton = document.querySelector("#createBtn"); 

createButton.addEventListener("click", (e) => {
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const pages = document.querySelector("#pages").value;
	const read = document.querySelector("#read").checked; 
	const book = new Book(title, author, pages, read); 
	addBookToLibrary(book);
	dialog.close();
	displayBooks();
	e.preventDefault();
});

showButton.addEventListener("click", () => {
	dialog.showModal();
});

closeButton.addEventListener("click", () => {
	dialog.close();
});

// Library related

const book1 = new Book('The Lord of the Rings', 'J.R.R Tolkien', 1356, false);
const book2 = new Book('The Lord of the Rings II', 'J.R.R Tolkien', 1326, true);
const book3 = new Book('The Lord of the Rings III', 'J.R.R Tolkien', 1556, false);

const myLibrary = [book1, book2, book3];

displayBooks();

function Book(title, author, pages, read) {
  // the object constructor
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function displayBooks() {
	document.getElementById("main").innerHTML = "";
	myLibrary.forEach((element, index) => {
	  const	deleteBtn =	document.createElement("button");
		deleteBtn.textContent = "Delete book";
		deleteBtn.addEventListener("click", () => {
			myLibrary.splice(index, 1);
			displayBooks();
		});

		const readBtn = document.createElement("button");
		readBtn.textContent = "Mark as read";
		readBtn.addEventListener("click", () => {
			myLibrary[index].read = !myLibrary[index].read;
			displayBooks();
		});

		const bookDiv = document.createElement("div");
		console.log(element);
		bookDiv.innerText = JSON.stringify(element);
		bookDiv.appendChild(deleteBtn);
		bookDiv.appendChild(readBtn);
		document.getElementById("main").appendChild(bookDiv);


	});
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

