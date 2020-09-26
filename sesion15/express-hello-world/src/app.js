//const http = require('http');
const express = require('express');
const app = express()

//const hostname = '127.0.0.1';
const port = 3000;

/* const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`[${req.method}] Root path API`);
      break
    case '/login':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        success: true,
        method: req.method,
        msg: `[${req.method}] /login`
      }));
      break
  }
}); */

app.get('/', (req, res) => {
  res.end(`Hello World with express! [${req.method}] [${req.url}]`)
})

.post('/',(req, res) => {
  res.end(`Hello World with express! [${req.method}] [${req.url}]`)
})

.put('/', (req, res) => {
  res.end(`Hello World with express! [${req.method}] [${req.url}]`)
})

.delete('/', (req, res) => {
  res.end(`Hello World with express! [${req.method}] [${req.url}]`)
})

app.get('/login', (req, res) => {
  res.end(JSON.stringify({
    success: true,
    datetime: new Date().toISOString(),
    token: 'qwerty.poiuyt.asdfgh',
    msg: '[POST] /login'
  }))
})





/* server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */

app.listen(port, () => {
  console.log(`Server running on port: ${port}/`)
})