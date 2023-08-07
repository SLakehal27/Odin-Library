const formbutton = document.querySelector(".bookbtn");
const shadow = document.querySelector(".shadow");
const bookform = document.querySelector(".bookform");
const formElements = ["title","author","pages"];
const radioChoice = ["read", "notread"]; 


function enableForm(){
    bookform.style.display = "flex";
    shadow.style.display = "block";
    document.getElementById(radioChoice[1]).checked = true;
}

function disableForm(){
    bookform.style.display = "none";
    shadow.style.display = "none";
}

function preventClosing(event){
    event.preventDefault();
}

function validate(){
    var numberOfPages = parseInt(document.getElementById(formElements[2]).value);
    if(document.getElementById(formElements[0]).value == ""){
        alert("Title required.");
        return false;
    }
    else if(document.getElementById(formElements[1]).value == ""){
        alert("Author required.");
        return false;
    }
    else if(numberOfPages <= 0){
        alert("Number of pages can't be zero or below zero");
        return false;
    }
    return true;
}

function populateLibrary(){
    var newBook = new Book();
    if(!validate()){
        return;
    };
    
    newBook.title = document.getElementById(formElements[0]).value;
    newBook.author = document.getElementById(formElements[1]).value;
    newBook.pages = parseInt(document.getElementById(formElements[2]).value);

    if(document.getElementById(radioChoice[0]).checked){
        newBook.read = radioChoice[0];
    }
    else
    {
        newBook.read = "not read";
    }

    addBookToLibrary(newBook);
    console.log("--------------------");
    printLibrary();
    disableForm();
    
    clearDisplay();
    displayLibrary();

    document.getElementById('bookform').reset();
}

bookform.addEventListener('submit', preventClosing);
formbutton.addEventListener('click', enableForm);
shadow.addEventListener('click', disableForm);
