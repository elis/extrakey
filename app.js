
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var livereload = require('express-livereload');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

livereload(app, {port: 6960, watchDir: '.'});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

    var ejs = require('ejs');
ejs.open = '<?';
ejs.close = '?>';
yaml = require('js-yaml');
fs   = require('fs');
var extraKeys; 


app.get('/', function(req, res){
	// Get document, or throw exception on error
	try {
    extraKeys = yaml.safeLoad(fs.readFileSync('keys.yaml', 'utf8'));
    console.log('Extra keys loaded:', extraKeys);
	} catch (e) {
    console.log(e);
	}

  res.render('index', { title: 'Express', keys: extraKeys });
});
app.get('/tpl/:name/:keysFile?', function(req, res){
	// Get document, or throw exception on error
	var file = (req.params.keysFile || 'keys') + '.yaml';
	try {
    extraKeys = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
    console.log('Extra keys loaded:', extraKeys);
	} catch (e) {
    console.log(e);
	}

  res.render(req.params.name, { title: 'Express', keys: extraKeys });
});
app.get('/users', user.list);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


var extraKey = require('./extraKey.js')(app);