
let myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + ", " + this.pages + " pages" + ", " + this.read + ".";
}

Book.prototype.setRead = function(state)
{
    this.read = state;
}

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read");

function addBookToLibrary(currentBook){
    myLibrary.push(currentBook);
}

function printLibrary(){
    for(let i = 0; i < myLibrary.length; i++){
        console.log(i + " : " + myLibrary[i].info());
    }
}

function clearLibrary(){
    myLibrary.length = 0;
}

function removeElement(index){
    let removed = myLibrary.splice(index,1);
    printLibrary();
}

addBookToLibrary(hobbit);
printLibrary();
