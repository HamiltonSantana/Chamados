var express = require('express');
var fs = require('fs');
var app = express();

app.listen(8080);

const filename = '';

app.get('/', (req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Pagina Inicial</h1>');
});

// Tratar para chamada de JS. Ao 'loadar' o arquivo, o server
// nao trata .js (MIME)
app.get('/:id', (req, res) =>{
  console.log(req.params.id);
  fs.readFile('src/'+req.params.id+'.html', function(err, data){
    if(err){
      res.writeHead(404, {'Content-Tpe': 'text/html'});
      console.log(err);
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
});
