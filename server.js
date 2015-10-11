/*
 * Module dependencies
 */
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));   

// Set default template engine to "ejs"
app.engine('html', require('ejs').renderFile);
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});