const express = require( 'express' );
const nj = require('nunjucks'); 
const app = express(); // creates an instance of an express application
const port = 3000;
const routes = require('./routes');
const bodyParser = require('body-parser'); 
const socketio = require('socket.io');


app.use(bodyParser.urlencoded({ extended: false })); 

app.use(bodyParser.json()); 

app.use('/', routes(io));

app.use((req, res,next) => {
    console.log(req.method, req.path);
    next();
})

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nj.render); // when giving html files to res.render, tell it to use nunjucks
nj.configure('views', {
    noCache: true
}); // point nunjucks to the proper directory for templates


// app.get('/', (req, res) => {
//     const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//     res.render( 'index', {title: 'Hall of Fame', subtitle: 'Sub-Hall of fame', people: people} );
//     // nj.render('index.html', {
//     //     title: "An Example",
//     //     people: [ {name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}]
//     // }, function (err, output){
//     //     res.send(output); 
//     //     if (err) console.log(err); 
//     //     console.log("OUTPUT: ",output); 
//     // }); 
//     // res.status(200).send('Hello');
// });




var server = app.listen(port, () => {
    console.log("server listening");
})

var io = socketio.listen(server);
