const Product = require('../models/products');
const Prod = require('../models/products');
const User = require('../models/users');

//id, isbn, title, publishedDate, author
exports.save = (req, res, next) => {
    const newProductBook = new Product(null, req.body.name, req.body.stock, req.body.price,req.body.image).save();
    res.status(201).json(newBook);
    console.log('Product Added: '+ newProductBook.name + " "+ newProductBook.stock + " added ");
}

exports.getAllProducts = (req, res, next) => {
    res.status(200).json(Prod.getAll());
}

exports.addItemtoCart = (req, res, next) => {
    //const newcartitem =  {product: req.body.product, quantity: req.body.qty};
    //res.status(201).json(newBook);
    console.log(req.body.product);
    res.status(200).json(User.addtoCart(req.body.product,req.body.quantity,req.body.userid));
}


exports.verifyUser = (req, res, next) => {
    res.status(200).json(User.authenticate(req.params.username,req.params.password));
}

exports.getUserCart = (req, res, next) => {
    res.status(200).json(User.authenticate(req.params.userid));
}

exports.updateProductStock = (req, res, next) => {
    res.json(Prod.updateStock() (req.body.pid,req.body.remove));
}
