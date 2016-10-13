var fs = require('fs');
var path = require("path");

function getList() {
	fs.readdir(process.argv[2], function doneReadDir(err,list) {
	if(err){
		return console.log(err);	
	}
	for(var i=0; i<list.length ; i++) {
		if(path.extname(list[i]) == '.' + process.argv[3]){
			console.log(list[i]);
		}
	}
 })
}

getList();
