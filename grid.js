const library = document.querySelector(".library");

function displayLibrary(){
    for(let i = 0 ; i < myLibrary.length; i++){
        const book = document.createElement('div');
        addContent(book, i);
        book.classList.add("book");
        library.appendChild(book)
    }
    console.log("displaying library.")
}

function clearDisplay(){
    const books = document.querySelectorAll('.book');

    books.forEach(book =>{
        book.remove();
    })
    console.log("library cleared");
}

function addContent(book, index)
{
    const cancel = document.createElement("p");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages  = document.createElement("p");

    const hasRead = document.createElement("div");
    const markAsRead = document.createElement("p");
    const checkBox = document.createElement("input");

    cancel.textContent = "X";
    cancel.setAttribute('onclick', "removeElement(" + index + ")");

    cancel.addEventListener('click', clearDisplay);
    cancel.addEventListener('click', displayLibrary);

    title.textContent = myLibrary[index].title;
    author.textContent = myLibrary[index].author;
    pages.textContent = myLibrary[index].pages;

    markAsRead.textContent = "Did you read it?";

    hasRead.classList.add("read");

    checkBox.setAttribute("type","checkbox");
    checkBox.setAttribute("id","check");

    if(myLibrary[index].read == "read")
    {
        checkBox.checked = true;
    }

    hasRead.appendChild(markAsRead);
    hasRead.appendChild(checkBox);

    const content = [cancel,title,author,pages,hasRead];

    for(let i = 0; i < content.length; i++){
        book.appendChild(content[i]);
    }
}

displayLibrary();