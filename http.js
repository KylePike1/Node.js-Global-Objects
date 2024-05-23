const http = require('http');

//create server
http.createServer(function(request, response){
    //write resonse to server
    response.write('Hello Peter!');
    //end response
    response.end();
}).listen(3000);
//server runs on port 3000 
//type: localhost:3000 into google to see message

//write message to console
console.log("server running on port 3000")

