var duplex = require('duplexer')
var through = require('through')

module.exports = function (counter) {
        // return a duplex stream to capture countries on the writable side
        // and pass through `counter` on the readable side
	var counts = {}
  	return duplex(through(record_count, set_count), counter)

	function record_count(obj) {
		var country = obj.country
		if (country in counts) {
			var count = counts[country]
			counts[country] = count + 1	
		} else {
			counts[country] = 1
		}
	}

	function set_count() {
		counter.setCounts(counts)
	}
};
