var http = require('http')

var url = process.argv[2] 

http.get(url, function(response) {
	response.setEncoding('utf8')
	response.on('error', function(error){
		console.error('response error', error)
	})
	response.on('data', function(data) {
		console.log(data)
	})
})
