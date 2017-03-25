var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var object = {"ip address": "", "language": "", "software": ""}
var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  var script = ""
  object['ip address'] = ip
  object.lang = req.headers['accept-language']
  object.software = req.headers['user-agent']
  res.send(object)
//  res.send(script)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
