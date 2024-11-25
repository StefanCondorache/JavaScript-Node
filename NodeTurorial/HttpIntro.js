
const http = require('http');

const server = http.createServer( (req, res) => {

    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }


})

server.listen(5000, () => {
    console.log("Server's listening on port : 5000");
    
});