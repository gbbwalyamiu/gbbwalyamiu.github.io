const express = require('express');
const router = express.Router({
    "caseSenstive": false,
    "strict": false  
});

router.use('/add-product',(req,res,next)=>{
    const html = `
        <html>
        <body>
       
        
        
        <form action="/products/save" method ="get">
          <div style="padding:100px;margin:100px;border:2px solid gray; width: 500px; height:300px">
          <h1>My Manage Products</h1>  
          <h4>Add New Product Details</h4>
            <label>Product Name</label> <br />
            <input type = "text" value = "JavaScript Course" id ="pname" name="pname" style="width:100%; font-size:20px" required /> <br /> <br />
            <label>Product Price</label> <br />
            <input type = "text" value = "500" id="price" name ="price" style="width:100%; font-size:20px" required/>  <br /> <br />
            <input type = "submit" value = "submit" />
          </div>
        </form>
        </body>
        </html>
    `;
    res.send(html); 
})
router.use('/product-added',(req,res,next)=>{

    console.log(req.body);
    console.log(req.body.lname + " "+ req.body.fname);
    console.log('Data test');

    res.end('Data has been saved successfully');
})

router.get('/save',(req,res,next)=>{

    console.log(req.query);
    console.log(req.query.pname + " "+ req.query.price);
    console.log('Data test');
    const html = `
        <html>
        <body>
        <br />
        <h1 style="color:blue">Success!!!</h1>
        <p style="font-size:26px">
            Product details have been saved successfully <br />
            Click <a href="http://localhost:3034/">here</a> to get back to the main page.
        </p>
        </body>
        </html>
    `;

    res.end(html);
})

module.exports = router;
