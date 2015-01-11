var zlib = require('zlib');
var crypto = require('crypto')
var tar = require('tar')
var through = require('through')

var parser = tar.Parse()
parser.on('entry', function (e) {
	if(e.type !== 'File') return
	var path = e.path
	e.pipe(crypto.createHash('md5', { encoding: 'hex' }))
	 .pipe(through(function concat(hash) {
		process.stdout.write(hash + ' ' + path + '\n')	
	}))	
})

process.stdin.
	pipe(crypto.createDecipher(process.argv[2], process.argv[3])).
	pipe(zlib.createGunzip()).
	pipe(parser)
