var fs = require('fs')
directoryPath = process.argv[2]
fileExtension = '.' + process.argv[3]
fs.readdir(directoryPath, function onDirRead(error, list) {
	if(error) console.log(error)
	var path = require('path')
	var listWithExtension = list.filter(function(file) {
		return path.extname(file) == fileExtension
	}).forEach(function(entry) {
                console.log(entry)
        })
})
