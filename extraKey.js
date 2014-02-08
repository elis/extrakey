var io, app;
var cp = require('child_process'),
    child;
    
module.exports = function init (sentApp) {
	app = sentApp;
	
	
	app.get('/keydown/:keyVal', function (req, res) {
		console.log('request received to send keydown for ', req.params.keyVal);
		var keys = req.params.keyVal.split('+');
		keys.forEach(function(key) {
			sendKey(key.toLowerCase(), 'down', console.log.bind(console));
		});
	}); 
	app.get('/keyup/:keyVal', function (req, res) {
		var keys = req.params.keyVal.split('+');
		keys.forEach(function(key) {
			sendKey(key.toLowerCase(), 'up', console.log.bind(console));
		});
	});
}

var sendKey = function (key, updown, callback) {
	console.log('sending key: %s [%s]',key, updown);
	cp.execFile('nircmd/nircmdc.exe', ['sendkey', key, updown], function () {
		if (callback && typeof callback == 'function') {
			callback.apply(null, [key, updown, arguments]);
		}
	});
}