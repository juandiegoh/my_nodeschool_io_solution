var through = require('through')

function write(buf) { this.queue(buf.toString().toUpperCase()) }
function end() { this.queue(null) } 

process.stdin.pipe(through(write, end)).pipe(process.stdout)
