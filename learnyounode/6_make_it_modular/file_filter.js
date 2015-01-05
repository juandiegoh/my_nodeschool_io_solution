var path = require('path')
var fs = require('fs')
module.exports = function(directoryPath, extension, callback) {

	fs.readdir(directoryPath, function onDirRead(error, list) {
		if(error) return callback(error)

		var listWithExtension = list.filter(function(file) {
			return path.extname(file) == '.' + extension
		})

		callback(null, listWithExtension)
	})
}
