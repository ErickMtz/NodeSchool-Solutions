var length = process.argv.length;
var exit = 0;

for (i=2; i<length ; i++){
	exit += Number(process.argv[i]);
}

console.log(exit);
