var combine = require('stream-combiner')
var split = require('split')
var through = require('through')
var zlib = require('zlib');

module.exports = function () {
	var grouper = {
		current: undefined,
		genres: {},
		process_json: function(json) {
			if(json.type === 'genre') {
				this.current = json.name
				this.genres[this.current] = []
				return
			} 
			if(json.type === 'book') {
				this.genres[this.current].push(json.name)
				return
			}
		}
		
	}

	return combine(
		split(),
		through(function jsonify(line) {
			if(line.length > 0) this.queue(JSON.parse(line))
		}),
		through(function process(json) {
				grouper.process_json(json)
			},
			function on_end() {
				var _this = this
				Object.keys(grouper.genres).forEach(function(genre) {
					_this.queue({name: genre, books: grouper.genres[genre]})
				})
				this.queue(null)
			}),
		through(function stringify(json) {
			this.queue(JSON.stringify(json) + '\n')
		}),
		zlib.createGzip()
        )
}
