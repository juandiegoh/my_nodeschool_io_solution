var http = require('http')
var url = require('url')

server = http.createServer(function(request, response) {
	if(request.method == 'GET') {
		reqData = url.parse(request.url, true)
		if(reqData.pathname == '/api/parsetime')
			result(reqData, response, function(date) {
				return JSON.stringify({ 'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()})
			})
		else if(reqData.pathname == '/api/unixtime') 
			result(reqData, response, function(date) {
                        	return JSON.stringify({ 'unixtime': date.getTime() })
			})
		else {
			res.writeHead(404)
			res.end()
		}
	}
})
server.listen(+process.argv[2])

function result(reqData, res, jsonify) {
	res.writeHead(200, { 'Content-Type': 'application/json' })
        var date = new Date(reqData.query.iso)
	res.end(jsonify(date))
}

