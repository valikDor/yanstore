var express = require("express");
var app = express();

app.use(express.static(__dirname));// встановлення каталогу статичного контенту

app.get("/", 
	function(req, res){
	res.sendFile(__dirname + "/index.html")
});

app.listen(process.env.PORT || 8080);
console.log("server is running");



