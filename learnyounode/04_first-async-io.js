var fs = require('fs');

function countLines() {
	fs.readFile(process.argv[2], function doneReading(err, fileContents){	
		if(err){
			return console.log(err);
		}
		var buf = fileContents;
		var str = buf.toString();
		var arr = str.split('\n');
		var length = arr.length - 1;
		console.log(length);		
})
}

countLines();

