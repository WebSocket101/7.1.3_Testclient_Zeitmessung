var WebSocketClient = require('websocket').client;
var url = "ws://localhost:3000/echo";
var client = new WebSocketClient();

client.connect(url);
client.on("connect",function(connection){
	connection.sendUTF(new Date().getTime());
	connection.on("message",function(message){
		console.log(new Date().getTime()-message.utf8Data);
		connection.sendUTF(new Date().getTime());
	});
});
client.on("connectFailed",function(err){
	client.connect(url)
});



  	


