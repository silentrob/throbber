var EventEmitter = require('events').EventEmitter;
var util    = require("util");

function Throbber() {
	EventEmitter.call(this);
}

util.inherits(Throbber, EventEmitter);

Throbber.prototype.start = function() {

	var chars = ["|","\\","-","/","|","\\","-","/"];
	this.emit("started");

	var i = 0;
	this.timer = setInterval(function(){
		process.stdout.write(chars[i]);
		process.stdout.write("\b");
		i++;
		if (i == chars.length) i = 0;
	},100);
	
}

Throbber.prototype.stop = function() {
	this.emit("stopped");
	clearInterval(this.timer);
	process.stdout.write("\b");
}

module.exports = Throbber;