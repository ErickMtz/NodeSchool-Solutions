var http = require('http');
var url = require('url');

function getTime(time) {
var result;
return {
hour: time.getHours(),
minute: time.getMinutes(),
second: time.getSeconds() }
}

function getUnixTime(time) {
 return { unixtime: time.getTime() }
}

http.createServer( function(request,response) {
	var parseUrl = url.parse(request.url, true);
	var time = new Date(parseUrl.query.iso);
	var result = (/^\/api\/parsetime/.test(request.url)?getTime(time):getUnixTime(time));
	response.writeHead(200, { 'Content-Type': 'application/json'})
	response.end(JSON.stringify(result));
}).listen(process.argv[2]);
