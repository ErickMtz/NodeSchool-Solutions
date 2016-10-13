var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
        var file = fs.createReadStream(process.argv[3]); 
 	file.pipe(response);
        //console.log(date.getFullYear());
});
server.listen(process.argv[2]);

