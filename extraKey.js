var io, app;
var cp = require('child_process'),
    child;
    
module.exports = function init (sentApp) {
	app = sentApp;
	
	
	app.get('/keydown/:keyVal', function (req, res) {
		console.log('request received to send keydown for ', req.params.keyVal);
		
		cp.execFile('nircmd/nircmdc.exe', ['sendkey', req.params.keyVal, 'down'], function () {
			console.log(arguments);
			
			res.send('ok');
		})
	}); 
	app.get('/keyup/:keyVal', function (req, res) {
		console.log('request received to send keydown for ', req.params.keyVal);
		
		cp.exec('nircmd/nircmdc.exe sendkey '+req.params.keyVal + ' up', function () {
			console.log(arguments);
			res.send('ok');
		})
		
		
	});
}
