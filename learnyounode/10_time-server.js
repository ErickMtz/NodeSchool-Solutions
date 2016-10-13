var net = require('net');
var server = net.createServer(function (socket) {
	var date = new Date();
	var dateString = date.getFullYear() + '-';
	dateString += date.getMonth()+1 + (date.getMonth()+1<10?'0':'') + '-';
	dateString += date.getDate() + (date.getDate()<10?'0':'') + ' ';
	dateString += date.getHours() + (date.getHours()<10? '0':'') + ':';
	dateString += date.getMinutes() + (date.getMinutes()<10? '0':'') + '\n';
	socket.write(dateString);
	socket.end();
	//console.log(date.getFullYear());
});
server.listen(process.argv[2]);
