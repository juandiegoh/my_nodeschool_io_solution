var http = require('http')
var bl = require('bl')

var results = []
count = 0

function printResults() {
	if(count == 3) {
		for(i = 0; i < 3; i++) {
			console.log(results[i])
		}
	}
}

function getAsync(url, position) {
	http.get(url, function(response) {
        	response.setEncoding('utf8')
        	response.pipe(bl(function(error, data) {
                	if(error) callback(error)
			results[position] = data.toString()
			count++
			printResults()
        	}))
	})
}

for(i = 0; i < 3; i++) {
	getAsync(process.argv[2+i], i)
}
