var Throbber = require("./");

var t = new Throbber();
t.start();

setTimeout(function(){
	t.stop();
},2000)

