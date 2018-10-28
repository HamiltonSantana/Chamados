var express = require('express');
var app = express();

app.listen(8080);

app.get('/', (req, res) =>{
  res.render(src/tag.html);
});
