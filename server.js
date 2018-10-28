var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
  // tratando POST
  if (req.method == 'POST'){
    req.on('data', dado =>{                    //recebe os dados do POST
      fs.appendFile('arquivoTeste.html', dado); //Criar arquivo local
    });
    req.on('end', ()=>{
      console.log('Salvo');
      res.end('OK');                          // Encerra a chamada do metodo
    });
  }
  var q = url.parse(req.url, true);
  var filename = "."+q.pathname;
  console.log(filename);
  if(filename == './consulta'){
    let body = [];
    req.on('url', ()=>{
      console.log('Carregou');
      body.push(body);
    }).on('end', ()=>{
      fs.readFile('arquivoTeste.txt', function(err, data){
        if(err) throw err;
        console.log(data.toString());
        // body = data.toString();
        console.log('Encerrado');
        res.send(data.toString());
      })
      res.end('OK');
    })
  }
  fs.readFile(filename, function(err, data){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080);
