var http = require('http')

var url = process.argv[2]

http.get(url, function(response) {
	var responseString = ''

	response.setEncoding('utf8')
	response
		.on('error', function(error){
			console.error('response error', error)
		})
		.on('data', function(data) {
			responseString += data
		})
		.on('end', function(end) {
			console.log(responseString.length)
			console.log(responseString)
		})

})
