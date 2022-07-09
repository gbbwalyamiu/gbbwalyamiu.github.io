var express = require('express');
var app = express();
app.set('env','development');

app.use(express.urlencoded({ extended:true }));
app.use('/ui',(req,res,next)=>{
    const html = `
        <html>
        <body>
        
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
        <form action="/save" method ="get">
           
            <label>First Name</label> <br />
            <input type = "text" value = "Bella" id ="fname" name="lname"/> <br /> <br />
            <label>Last Name</label> <br />
            <input type = "text" value = "Gad" id="lname" name ="fname" /> <br />
            <input type = "submit" value = "submit" />
         
        </form>
        </body>
        </html>
    `;
    res.send(html); 
})
app.use('/save',(req,res,next)=>{

    console.log(req.body);
    console.log(req.body.lname + " "+ req.body.fname);
    console.log('Data test');

    res.end('Data has been saved successfully');
})

app.get('/save',(req,res,next)=>{

    console.log(req.query);
    console.log(req.query.lname + " "+ req.query.fname);
    console.log('Data test');

    res.end('Data has been saved successfully in get');
})

app.use((req,res,next)=>{
    res.write('This lab 12 test');
    next();
},(req,res,next)=>{
    res.end('\n This is the second statement');
}

)

app.get('/', function(req, res){
   res.send("Lab 12 Page");
});

const port = 3034;
app.listen(port,()=>{console.log('running on port '+port)});