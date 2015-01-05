var path = process.argv[2]
var extension = process.argv[3]

var fileFilter = require('./file_filter')

fileFilter(path, extension, function onFilterFinished(error, list) {
	if(error) console.log(error)
	list.forEach(function(file) {
		console.log(file)
	})
})
