module.exports = function (path_name,extension,callback){
	var fs = require('fs');
	var path = require('path');
	var count = 0;
	var out = [];
	fs.readdir(path_name, function doneReadDir(err,list) {
        	if(err){
                	return callback(err);        
        	}
        	for(var i=0; i<list.length ; i++) {
                	if(path.extname(list[i]) == '.' + extension){
                     		out[count]=list[i];
				count++;   			
                	}
        	}
		return callback(null,out);
	})
}




