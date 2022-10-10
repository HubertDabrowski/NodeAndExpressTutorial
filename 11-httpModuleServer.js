const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.write('Welcome to our home page');
    res.end();
  }
  else if(req.url === '/about'){
    res.write('Here is our short history');
    res.end();
  }
  else res.write(`
    <h1>Opps!</h1
    <p> We cant find the page ur looking for!</p>
    <a href="/"> back home </a>
  `);
  res.end();
})

server.listen(5000)