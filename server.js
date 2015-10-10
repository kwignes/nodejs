/*
 * Module dependencies
 */
var express = require('express');
var app = express();

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));   

// Set default template engine to "ejs"
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index');
});


app.listen(5000, function() { console.log('listening')});