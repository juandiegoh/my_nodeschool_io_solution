var split = require('split')
var through = require('through')

var count = 0 

function upperOrLowerCaseTransformer(line) {
	count++
	if(count % 2 !== 0) {
		return line.toLowerCase()	
	} else {
		return line.toUpperCase()
	}
}

process.stdin.pipe(split()).pipe(through(function(line) {
	this.queue(upperOrLowerCaseTransformer(line.toString()) + '\n')
})).pipe(process.stdout) 
