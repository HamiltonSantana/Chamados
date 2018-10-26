$().ready(function(){
  $(".bt-teste").click(function(){
    var valor = $("#titulo-chamado").val();
    var conteudo = $("#conteudo-chamado").val();
    console.log(valor);
    console.log(conteudo);
    $.ajax({
      url: '/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        titulo: valor,
        conteudo: conteudo
      })
    });
  });
});
