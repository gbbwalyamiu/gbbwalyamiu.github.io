var express = require('express');
var app = express();
const path = require('path');
app.set('env','development');
const productRounter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
app.use(express.static(path.join(__dirname, 'ui')));

app.use(express.urlencoded({ extended:true }));
app.use('/products', productRounter);
app.use('/users', userRouter);
   

//Capture All 404 errors
app.use(function (req,res,next){
    const html = `
        <html>
        <body>
        <br />
        <h1 style="color:red">Opps Something went wrong.</h1>
        <p style="font-size:26px">
            The page you requested can not be found. Maybe it has been moved or changed. Kindly check your URL to confirm. <br />
            Click <a href="http://localhost:3034/">here</a> to get back to the main page.
        </p>
        </body>
        </html>
    `;
    //res.send(html);
	res.status(404).send(html);
});
const port = 3034;
app.listen(port,()=>{console.log('running on port '+port)});