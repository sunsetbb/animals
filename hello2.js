const http = require("http")
const port = 8080
const fs =require('fs')

var server= http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('client/index.html',function(error,data){
        if(error){
            response.writeHead(404)
            response.write('Error: File cannot be found.')
        }
        else{
            response.write(data)
        }
        response.end();
    })
});

server.listen(port,function(error){
    if(error) {
        console.log("Error pop-up:", error)
    }else{
    console.log('Server running on port http://127.0.0.1:8080/')
    }
});

