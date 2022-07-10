const Book = require('../models/book');

//id, isbn, title, publishedDate, author
exports.save = (req, res, next) => {
    const newBook = new Book(null, req.body.isbn, req.body.title, req.body.publishedDate,req.body.author).save();
    res.status(201).json(newBook);
    console.log('book added: '+ newBook);
}

exports.getAll = (req, res, next) => {
    res.status(200).json(Book.getAll());
}
exports.getbytitle = (req, res, next) => {
    res.json(Book.findwithtitle(req.params.title));
}
exports.deleteByIsbn = (req, res, next) => {
    res.json(Book.deleteByIsbn(req.params.isbn));
}

exports.edit = (req, res) => {
    const updatedBook = new Book(req.body.id, req.body.isbn, req.body.title, req.body.publishedDate,req.body.author).edit();
    res.json(updatedBook);
}