let bookList = [];
let counter = 0;

module.exports = class Book {
    constructor(id, isbn, title, publishedDate, author) {
        this.id = id;
        this.title = title;
        this.publishedDate = publishedDate;
        this.author = author;
        this.isbn = isbn;

    }

    save(){
        this.id = ++counter; //start with 1;
        bookList.push(this);
        return this;
    }

    edit(){
        const index = bookList.findIndex(book => book.isbn == this.isbn);
        bookList.splice(index, 1, this);
        return this;
    }
    static find(isbn)
    {
        let found = bookList.filter(b =>b.isbn==isbn);
        if (found.length>0)
        {
            return found;
        }
        else
        {
            return 0;
        }

    }
    static findwithtitle(title)
    {
        let found = bookList.filter(b =>b.title.includes(title));
        if (found.length>0)
        {
            return found;
        }
        else
        {
            return 0;
        }

    }   

    static getAll(){
        return bookList;
    }

    static deleteByIsbn(isbn){
        const index = bookList.findIndex(book => book.isbn == isbn);
        const deletedBook = bookList[index];
        bookList.splice(index, 1);
        return deletedBook;
    }



}