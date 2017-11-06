const express = require( 'express' );
const nj = require('nunjucks'); 
const app = express(); // creates an instance of an express application
const port = 3000;

app.use((req, res,next) => {
    console.log(req.method, req.path);
    next();
})

nj.configure('views', {
    noCache: true
}); 

app.get('/', (req, res) => {
    nj.render('index.html', {
        title: "An Example",
        people: [ {name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}]
    }, function (err, output){
        res.send(output); 
        if (err) console.log(err); 
        console.log("OUTPUT: ",output); 
    }); 
    // res.status(200).send('Hello');
});

app.listen(port, () => {
    console.log("server listening");
})
