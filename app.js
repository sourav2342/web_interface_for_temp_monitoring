var curr_temperature = 12;

const express = require('express');
const serv = express();
const cors = require('cors');


serv.use(cors());

//serv.use(express.static(path.join(__dirname,'css')));

/*serv.get("/", function(req, res){

    res.sendFile(__dirname+"/index.html");
});*/
serv.use(express.static("html&css"));

serv.listen(3000);

serv.get("/", function(req, res){

    res.status(200).send(String(curr_temperature));

});



var http = require('http');

  var server = http.createServer(function (req, res) {
      
     
    if (req.method === 'POST' && req.url === '/post_data') {
        let body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {

           console.log(body);

           curr_temperature = Number(body);

        });
    } 
    else {
        res.end('Not Found');
    }
      
});

server.listen(3000, function(){
  console.log("Server is listening at 3000");
});
