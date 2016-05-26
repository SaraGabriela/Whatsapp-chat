var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});


io.on('connection', function(socket){
	console.log('Al fin se conectó!');

	socket.on('chat', function(_msg){
		io.emit('nuevo_mensaje', _msg);
	});
	socket.on('conectado',function(_user){
		io.emit('alguien_conectado', _user);
	}); 

	


});





http.listen(8080, function () {
	console.log('Muy bien!, eres un crack, sabes trabajar con node JS');
});