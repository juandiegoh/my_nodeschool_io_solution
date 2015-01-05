var http = require('http')
var bl = require('bl')

var url = process.argv[2]

http.get(url, function(response) {
	response.setEncoding('utf8')
	response.pipe(bl(function(error, data) {
		if(error) console.error(error)
		console.log(data.length)
		console.log(data.toString())
	}))
})
