var compression = require('compression');
var express = require('express');
var path = require('path')
var logger = require('morgan');
var app = express();
var modRewrite = require('connect-modrewrite');

app.use(logger('dev'));
app.use(compression());
app.use(express.static(path.join(__dirname, 'dist') , {  etag: false }));

//HTML5 mode
app.use(function(request, response, next) {
   response.sendfile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);