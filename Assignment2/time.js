var net = require('net')
var date = new Date()

var server = net.createServer(function(socket) {
      var timestring = date.getFullYear()+"-"+ (date.getMonth()+1) +"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n"
      socket.write(timestring)
      socket.end()
})

server.listen(process.argv[2])