const express = require( 'express' );
const nj = require('nunjucks'); 
const app = express(); // creates an instance of an express application
const port = 3000;

app.use((req, res,next) => {
    console.log(req.method, req.path, res.status);
    next();
})

app.get('/', (req, res) => {
    res.status(200).send('Hello');
});


//this is lori's test comment!

app.listen(port, () => {
    console.log("server listening");
})
