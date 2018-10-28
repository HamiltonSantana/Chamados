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
  // tratando requisicao para consulta
  if(filename == './consulta'){
    req.on('data', ()=>{
      //
    }).on('end', ()=>{
      res.end();
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
