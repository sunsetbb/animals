


/*express js app part note that this app set npm start to start */
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.url;
const path = require('path');
const port = process.env.PORT || 8080;  //replacement port if not previously set in cmd ==export PORT = 8000



/*get + post */
const anims = [
    {title: 'cat'},
    {title: 'pig'},
    {title: 'rabbit'}
];

app.post('/action', (req,res) => {
    const datan = {title: 'fish'};
    anims.push(datan);
    res.status(200).send('Added pet');
});

app.get('/action2', (req, res) =>{
    res.status(200).send(anims);
});


// static files
app.use(express.static('client'));
app.use('/css', express.static(__dirname + 'client/css'));
app.use('/js', express.static(__dirname + 'client/js'));
app.use('/img', express.static(__dirname + 'client/img'));


app.get('/', function(request, response){
    response.status(200).sendFile(path.join(__dirname, '/client/index.html'));
});


//port
app.listen(port,function(error){
    if(error) {
        console.log("Error pop-up:", error);
    }else{
        console.log(`server running at http://127.0.0.1:${port}/`);
 
    }
});

/* Web page part node js*
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080

var server = http.createServer(function(request, response){
    if(request.url === "/"){
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
        });
    }else if(request.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'client', request.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        response.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(response);

    }else if(request.url.match("\.js$")){
        var jsPath = path.join(__dirname, 'client', request.url);
        var fileStream = fs.createReadStream(jsPath, "UTF-8");
        response.writeHead(200, {"Content-Type": "text/js"});
        fileStream.pipe(response);
    }else if(request.url.match("\.png$")){
        var img1Path = path.join(__dirname, 'client', request.url);
        var fileStream = fs.createReadStream(img1Path);
        response.writeHead(200, {"Content-Type": "img/png"});
        fileStream.pipe(response);
    }else if(request.url.match("\.jpg$")){
        var img2Path = path.join(__dirname, 'client', request.url);
        var fileStream = fs.createReadStream(img2Path);
        response.writeHead(200, {"Content-Type": "img/jpg"});
        fileStream.pipe(response);  
    }else if(request.url.match("\.jfif$")){
        var img3Path = path.join(__dirname, 'client', request.url);
        var fileStream = fs.createReadStream(img3Path);
        response.writeHead(200, {"Content-Type": "img/jfif"});
        fileStream.pipe(response);
    }else{
        response.writeHead(404)
        response.write('Error: File cannot be found.')
        response.end();

    }


});

server.listen(port,function(error){
    if(error) {
        console.log("Error pop-up:", error)
    }else{
        console.log('Server running on port http://127.0.0.1:8080/')
    }
});
*/