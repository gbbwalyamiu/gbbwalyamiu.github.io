const express = require('express');
const bookController = require('../controllers/BookController');
const router = express.Router();
router.use('/newbook',(req,res,next)=>{
    const html = `
        <html>
        <body>      
        <form action="/books/bookn" method ="post">
        <div style="padding:60px;margin:100px;border:2px solid gray; width: 500px; height:400px">
            <h1>Book Details</h1>
            <h4>Add New</h4>    
            <label>ISBN</label> <br />
                <input type = "text" value = "545490" id ="isbn" name="isbn" style="width:100%; font-size:20px" required /> <br /> <br />
                <label>Title</label> <br />
                <input type = "text" value = "Code is Tough" id="title" name ="title" style="width:100%; font-size:20px" required /> <br /> <br />
                <label>Date Published</label> <br />
                <input type = "text" value = "2000-11-10" id ="publishedDate" name="publishedDate" style="width:100%; font-size:20px" required /> <br /> <br />
                <label>Author</label> <br />
                <input type = "text" value = "Mike Kangala" id="author" name ="author" style="width:100%; font-size:20px" required /> <br /> <br />
                <input type = "submit" value = "submit" />
        <div>
         
        </form>
        </body>
        </html>
    `;
    res.send(html); 
})
router.use('/bookr',(req,res,next)=>{
    const html = `
        <html>
        <body>      
        <form action="/books/bookn" method ="post">
        <div style="padding:60px;margin:100px;border:2px solid gray; width: 500px; height:400px">
            <h1>Book Details</h1>
            <h4>Remove Book</h4>    
            <label>ISBN</label> <br />
                <input type = "text" value = "545490" id ="isbn" name="isbn" style="width:100%; font-size:20px" required /> <br /> <br />
                
                <input type = "submit" value = "Remove" />
        <div>
         
        </form>
        </body>
        </html>
    `;
    res.send(html); 
})


router.use('/editbook',(req,res,next)=>{
    const html = `
        <html>
        <body>      
        <form action="/books/bookn" method ="post">
        <div style="padding:60px;margin:100px;border:2px solid gray; width: 500px; height:400px">
            <h1>Book Details</h1>
            <h4>Edit Details. Enter ISNB and New Details</h4>    
            <label>ISBN</label> <br />
                <input type = "text" value = "545490" id ="isbn" name="isbn" style="width:100%; font-size:20px" required /> <br /> <br />
                <label>Title</label> <br />
                <input type = "text" value = "New Title" id="title" name ="title" style="width:100%; font-size:20px" required /> <br /> <br />
                <label>Date Published</label> <br />
                <input type = "text" value = "2000-11-11" id ="publishedDate" name="publishedDate" style="width:100%; font-size:20px" required /> <br /> <br />
                <label>Author</label> <br />
                <input type = "text" value = "New Author" id="author" name ="author" style="width:100%; font-size:20px" required /> <br /> <br />
                <input type = "submit" value = "submit" />
        <div>
         
        </form>
        </body>
        </html>
    `;
    res.send(html); 
})

router.post('/bookn', bookController.save);
router.get('/all', bookController.getAll);
router.delete('/:isbn', bookController.deleteByIsbn);
router.put('/:isbn', bookController.edit);
router.get('/:title', bookController.getbytitle);


module.exports = router;