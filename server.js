var express = require('express')
var app = express()
var useragent = require('useragent')
var port = process.env.PORT || 8080


app.get('/*', function(req, res) {
	var ipadd = req.ip.replace(/^.*:/, '')
    var lang = req.headers["accept-language"].replace(/,.*/, '')
    var agent = useragent.parse(req.headers['user-agent'])
    var soft = agent.os.toString()
    
	var jsonstring = {
        ipaddress : ipadd,
        language : lang,
        software: soft
    }
    res.send(JSON.stringify(jsonstring))
});

app.listen(port, function() {
	console.log("server running")
})