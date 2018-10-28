var express = require('express');
var fs = require('fs');
var app = express();

app.listen(8080);

app.get('/', (req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Pagina Inicial</h1>');
});
app.get('/tag', (req, res) =>{
  fs.readFile('/src/tag.html', (err, data)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  });
});
