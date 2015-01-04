var fs = require('fs')

fs.readFile(process.argv[2], function onReadFinished(error, buffer) {
	if(error) return console.log(error)
	console.log(buffer.toString().split('\n').length - 1)
})
