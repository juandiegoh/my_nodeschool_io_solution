var concat = require('concat-stream')

process.stdin.pipe(concat(function(full) { 
	process.stdout.write(full.toString().split("").reverse().join("") + '\n')
}))
