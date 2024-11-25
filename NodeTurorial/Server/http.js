const http = require('http');
const server = http.createServer( (req, res) => {
    
    console.log(req.method, req.url);
    

    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<h2> Something else <h2>')


    res.end('Here is the end');  // always needed



    
})

server.listen(5000);    // always needed
