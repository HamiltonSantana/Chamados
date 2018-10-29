var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(8080, ()=>{console.log('Servidor ativo!')});

const filename = '';

app.get('/', (req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Pagina Inicial</h1>');
});

// Adicionando um tratamento para url
app.get('/:fd/:id', (req, res)=>{
  console.log(req.params.fd);
  var filename = '.'+req.url;

  if (req.params.fd == 'src') filename = filename+'.html';

  console.log(filename);
  fs.readFile(filename, (err, data)=>{
    if(err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
});

app.post('/:id', (req, res) =>{
  console.log(req);

  if(req.url == '/salva'){
    req.on('data', ()=>{
      fs.appendFile(req.body.'titulo', req.body.'descricao');
    }).on('end', ()=>{
      res.end('Salvo!');
    })
  }
  if(req.url == '/consulta'){
    req.on('data', dados =>{
      fs.readFile(dados, (err, data)=>{
        if(err) throw err;
        res.end(data);
      })
    });
  }
});
