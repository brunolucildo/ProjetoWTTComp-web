var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, '/dist/wtt-project')))
var port = process.env.PORT || 8080
app.get(/.*/, (req, res) =>
  res.sendFile(__dirname + '/dist/wtt-project/index.html')
)

app.listen(port)
console.log('Servidor rodando na porta ' + port)
