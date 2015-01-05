var http = require('http')
var fs = require('fs')

var port = +process.argv[2]
var filePath = process.argv[3]

var server = http.createServer(function(request, response) {
	var src = fs.createReadStream(filePath)
	response.writeHead(200, { 'content-type': 'text/plain' })
	src.pipe(response)
})

server.listen(port)
