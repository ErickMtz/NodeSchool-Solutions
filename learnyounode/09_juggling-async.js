var http = require('http');
var bl = require('bl');
var count = 0;
var result = []

function getHttp(url,index){
http.get(url,function(response){
	response.setEncoding('utf8');
	response.pipe(bl (function(err,data){
		result[index]=data.toString();
		count++;
		
		if(count == 3){
			print();
		}
	}))	
})
}

for(var i=2;i<5;i++)
	getHttp(process.argv[i],i-2);

function print() {
	for(var i=0;i<3;i++){
		console.log(result[i]);
	}
}






