// Book Constructor
function Book(title, author, isbn) {
this.title = title;
this.author= author;
this.isbn = isbn;

}


//UI Contructor
function UI(){}

//Add Book to List
UI.prototype.addBookToList = function(book){
    //let see if it is calling this prototype
// console.log(book);

//Let create the list

const list = document.getElementById('book-list');
//now let create an HTML ELEMENT USING JAVASCRIPT

// Create tr element
const row = document.createElement('tr');
//test it
// console.log(row);

//Insert Col by using template literals
row.innerHTML = `
 
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="" class="delete">X</a></td>

`;

//Let append to the list

list.appendChild(row);



}

//so let clear this fields right after we submit


//Show Alert

UI.prototype.showAlert = function(message, className){

// Creare div

const div = document.createElement('div');
//Add className

div.className = `alert ${className}`;

//Add Text which we need to add a text node

div.appendChild(document.createTextNode(message));

//let insert into the document by Get the parent

const container = document.querySelector('.container');

//let put it right before the form

//Get Form

const form = document.querySelector('#book-form');

//take the constainer which is the parent and insert before.
// it going to take two things the div and form

//Insert alert

container.insertBefore(div, form);

// Timeout after 3 sec

//Here we going to use windows object
setTimeout(function(){

    document.querySelector('.alert').remove();
}, 3000);

}


//Delete book

UI.prototype.deleteBook = function(target){

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }

}



//Clear Fields

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listening

document.getElementById('book-form').addEventListener('submit',function(e){
// console.log('Test');

//Get form values

const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const isbn = document.getElementById('isbn').value;

// console.log(title, author, isbn);

//Instantiate book
const book = new Book(title, author, isbn);
// console.log(book);
// Now we have a book object

//Instantiate UL
const ui = new UI();









//Validate
if(title === '' || author === '' || isbn === '') {

    //Error alert

    ui.showAlert('please fill in all fields', 'error');
}
else{

//Add Book to list

ui.addBookToList(book);
//so let create the prototype


//show success

ui.showAlert('Book Added', 'success');

// Clear Fields

ui.clearFields();


}




// //Add Book to list

// ui.addBookToList(book);
// //so let create the prototype

// // Clear Fields

// ui.clearFields();



e.preventDefault();
})


//Event listening for delete

//here we going to use the parent of it i.e 

document.getElementById('book-list').addEventListener('click', function(e){


// console.log(123); 


//Instantiate UL
const ui = new UI();
// Delete Book
ui.deleteBook(e.target);

//Show message

ui.showAlert('Book Removed!', 'success');


e.preventDefault();
});