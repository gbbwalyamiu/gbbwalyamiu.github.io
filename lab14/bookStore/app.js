var express = require('express');
var app = express();
const path = require('path');
app.set('env','development');
const bookRounter = require('./routes/bookRouter');

app.use(express.static(path.join(__dirname, 'views')));

app.use(express.urlencoded({ extended:true }));
app.use('/books', bookRounter);
//app.use('/users', userRouter);
   
app.get('/', function(req, res){
   res.sendFile(path.join(__dirname,'..','bookStore','views','index.html'));
});
//Capture All 404 errors
app.use(function (req,res,next){
    const html = `
        <html>
        <body>
        <br />
        <h1 style="color:red">Opps Something went wrong.</h1>
        <p style="font-size:26px">
            The page you requested can not be found. Maybe it has been moved or changed. Kindly check your URL to confirm. <br />
            Click <a href="http://localhost:3036/">here</a> to get back to the main page.
        </p>
        </body>
        </html>
    `;
    //res.send(html);
	res.status(404).send(html);
});
const port = 3036;
app.listen(port,()=>{console.log('running on port '+port)});