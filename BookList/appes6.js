
class Book {
constructor(title, author, isbn) {
this.title = title;
this.author = author;
this.isbn = isbn;

}

}

class UI {

addBookToList(book) {

        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class="delete">X</a></td>

        `;
list.appendChild(row);

    
}

showAlert(message, className){

            const div = document.createElement('div');

            //Add className

            div.className = `alert ${className}`;
            
            div.appendChild(document.createTextNode(message));
            
            const container = document.querySelector('.container');
            
            //Get Form
            
            const form = document.querySelector('#book-form');
            
            //Insert alert
            
            container.insertBefore(div, form);
            
            // Timeout after 3 sec
        
            setTimeout(function(){
            
                document.querySelector('.alert').remove();
            }, 3000);
            

}
deleteBook(target) {

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }
}

clearFields(){

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

}

//Event Listening

document.getElementById('book-form').addEventListener('submit',function(e){
    
    //Get form values
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    //Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();
    
    //Validate
    if(title === '' || author === '' || isbn === '') {
    
        //Error alert
    
        ui.showAlert('please fill in all fields', 'error');
    }
    else{
    
    //Add Book to list
    
    ui.addBookToList(book);
    
    //show success
    
    ui.showAlert('Book Added', 'success');
    
    // Clear Fields
    
    ui.clearFields();
       
    }
    
    e.preventDefault();
    })
    
    //Event listening for delete 
    document.getElementById('book-list').addEventListener('click', function(e){

    //Instantiate UL
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);
    
    //Show Message
    
    ui.showAlert('Book Removed!', 'success');
    
    
    e.preventDefault();
    });