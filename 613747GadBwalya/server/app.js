console.log('we could be set to go');

var express = require('express');
var app = express();
const path = require('path');
app.set('env','development');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

app.use(express.static(path.join(__dirname, 'client')));
const cors = require('cors');
const User = require('./models/users');

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended:true }));
app.use('/login', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','client','login.html'));

});
app.use('/Products', productRouter);
app.use('/lgn', userRouter);
let db = [
    {id: 1, username: 'gb', password: 'gb'},
    {id: 2, username: 'Edward', password: '222'}
];


//app.use('/users', userRouter);
/*   
app.get('/', function(req, res){
   res.sendFile(path.join(__dirname,'..','bookStore','views','index.html'));
});   */
//Capture All 404 errors
app.use(function (req,res,next){
    const html = `
        <html>
        <body>
        <br />
        <h1 style="color:red">Opps Something went wrong. </h1>
        <p style="font-size:26px">
            The page you requested can not be found. Maybe it has been moved or changed. Kindly check your URL to confirm. <br />
            Click <a href="http://localhost:3999/">here</a> to get back to the main page.
        </p>
        </body>
        </html>
    `;
    //res.send(html);
	res.status(404).send(html);
});
const port = 3999;
app.listen(port,()=>{console.log('running on port '+port)});