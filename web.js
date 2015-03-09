var gzippo = require('gzippo');
var express = require('express');
var logger = require('morgan');
var app = express();
var modRewrite = require('connect-modrewrite');

app.use(logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist", {maxAge: -1, clientMaxAge: -1}));

//HTML5 mode
app.use(function(request, response, next) {
   response.sendfile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);