let myLibrary = [];

function Book(author, title, pages, haveRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.haveRead = haveRead;
}

Book.prototype.changeRead = function() {
    if (this.haveRead === 'yes') {
        console.log('it worked')
        this.haveRead = 'no';
    }
    else if (this.haveRead === 'no'){
        console.log('it worked')
        this.haveRead = 'yes';
    }
}

function displayLibrary(library) {
    let libraryBox = document.querySelector('.libraryBox');
    let allBooks = document.querySelectorAll('.book');
    let bookNumber = 0;

    allBooks.forEach(book => {
        libraryBox.removeChild(book);
    })

    for (let book of library) {
            let divBook = document.createElement('div');
            divBook.setAttribute('id',bookNumber);
            bookNumber += 1;
            divBook.setAttribute('class','book');
            libraryBox.appendChild(divBook);

            let titleDiv = document.createElement('div');
            titleDiv.textContent = 'Title: ' + book.title;
            titleDiv.setAttribute = ('id', 'title');
            divBook.appendChild(titleDiv);

            let authorDiv = document.createElement('div');
            authorDiv.textContent = 'Author: ' + book.author;
            authorDiv.setAttribute = ('id', 'author');
            divBook.appendChild(authorDiv);

            let pagesDiv = document.createElement('div');
            pagesDiv.textContent = 'Pages: ' + book.pages;
            pagesDiv.setAttribute('id', 'pages');
            divBook.appendChild(pagesDiv);

            let haveReadDiv = document.createElement('div');
            haveReadDiv.textContent = "Have read: " + book.haveRead;
            haveReadDiv.setAttribute('id', 'haveRead' + book.title);
            divBook.appendChild(haveReadDiv);
            
            const readBtn = document.createElement('button');
            readBtn.textContent = 'Have read';
            readBtn.setAttribute('id', book.title);
            readBtn.addEventListener('click', () => {
                for(let book of myLibrary){
                    if (book.title = readBtn.getAttribute('id')){
                        divBook.removeChild(document.getElementById('haveRead' + book.title));
                        book.changeRead();
                        let haveReadDiv = document.createElement('div');
                        haveReadDiv.setAttribute('id','haveRead' + book.title);
                        haveReadDiv.textContent = "Have read: " + book.haveRead;
                        divBook.insertBefore(haveReadDiv,readBtn);
                    }
                }
            })
            divBook.appendChild(readBtn);
            

    }
}

function addBookToLibrary() {
    //Saving value into myLibrary array
    let bookAuthor = document.querySelector("#bookAuthor").value;
    let bookTitle = document.querySelector("#bookTitle").value;
    let bookPages = document.querySelector("#bookPages").value;
    let haveRead = '';
    
    if (document.querySelector('#haveReadYes').checked){
        haveRead = 'yes'
    }
    else if (document.querySelector('#haveReadNo').checked){
        haveRead = 'no'
    }

    const aBook = new Book(bookAuthor, bookTitle, bookPages, haveRead);
    
    myLibrary.push(aBook);
    for(i of myLibrary){
        console.log(i);
    }

    const inputs = document.querySelectorAll('#bookTitle, #bookAuthor, #bookPages');
    inputs.forEach(input => {
        input.value ='';
    })
    const radios = document.querySelectorAll('#haveReadYes', 'haveReadNo');
    radios.forEach(radio => {
        radio.checked = false;
    });

    displayLibrary(myLibrary);
}


//Create Form
let bookBtn = document.querySelector("#newBookBtn");
bookBtn.addEventListener('click', () => {
    if (document.body.contains(document.querySelector("#bookForm"))) {
        alert("Book form already open! Please fill it out.");
    }
    else {
        const bookForm = document.createElement('form');
        bookForm.setAttribute("id", "bookForm");
        bookForm.setAttribute("name", "bookForm");
        bookForm.setAttribute("method", "dialog");
        

        const labelTitle = document.createElement('label');
        labelTitle.setAttribute('for', 'bookTitle');
        labelTitle.textContent = 'Book Title:'
        const inputTitle = document.createElement('input');
        inputTitle.setAttribute('type', 'text');
        inputTitle.setAttribute('id', 'bookTitle');
        inputTitle.setAttribute('name', 'bookTitle');

        const labelAuthor = document.createElement('label');
        labelAuthor.setAttribute('for', 'bookAuthor');
        labelAuthor.textContent = 'Author:'
        const inputAuthor = document.createElement('input');
        inputAuthor.setAttribute('type', 'text');
        inputAuthor.setAttribute('id', 'bookAuthor');
        inputAuthor.setAttribute('name', 'bookAuthor');

        const labelPages = document.createElement('label');
        labelPages.setAttribute('for', 'bookPages');
        labelPages.textContent = 'Number of pages:';
        const inputPages = document.createElement('input');
        inputPages.setAttribute('type', 'number');
        inputPages.setAttribute('id', 'bookPages');
        inputPages.setAttribute('name', 'bookPages');

        const haveReadDiv = document.createElement('div');
        haveReadDiv.textContent = "Have read: "
        haveReadDiv.setAttribute('id', 'haveReadDiv');

        const haveReadYes = document.createElement('input');
        haveReadYes.setAttribute('type', 'radio');
        haveReadYes.setAttribute('id', 'haveReadYes');
        haveReadYes.setAttribute('name', 'haveRead');
        haveReadYes.setAttribute('value', true);

        const haveReadYesLabel = document.createElement('label');
        haveReadYesLabel.textContent = 'Yes';
        haveReadYesLabel.setAttribute('for', 'haveReadYes');

        const haveReadNo = document.createElement('input');
        haveReadNo.setAttribute('type', 'radio');
        haveReadNo.setAttribute('id', 'haveReadNo');
        haveReadNo.setAttribute('name', 'haveRead');
        haveReadNo.setAttribute('value', false);

        const haveReadNoLabel = document.createElement('label');
        haveReadNoLabel.textContent = 'No';
        haveReadNoLabel.setAttribute('for', 'haveReadNo');

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        submitBtn.setAttribute('onclick', 'addBookToLibrary()');

        const divForm = document.querySelector('#formBox');
        divForm.appendChild(bookForm);

        bookForm.appendChild(labelTitle);
        bookForm.appendChild(inputTitle);
        bookForm.appendChild(labelAuthor);
        bookForm.appendChild(inputAuthor);
        bookForm.appendChild(labelPages);
        bookForm.appendChild(inputPages);
        bookForm.appendChild(haveReadDiv);
        haveReadDiv.appendChild(haveReadYes);
        haveReadDiv.appendChild(haveReadYesLabel);
        haveReadDiv.appendChild(haveReadNo);
        haveReadDiv.appendChild(haveReadNoLabel);

        bookForm.appendChild(submitBtn);
    }

});