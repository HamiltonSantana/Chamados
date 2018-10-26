$().ready(function(){
  $(".bt-Pesquisa").click(function(){
    // console.log('Inicio requisicao');
    // var valor = $("#titulo-chamado").val();
    // var conteudo = $("#conteudo-chamado").val();
    // console.log(valor);
    // console.log(conteudo);
    $.ajax({
      url: '/consulta',
      type: 'GET',
      contentType: 'application/json',
      dataType: "text"
    }).done(function(data){
      console.log(data);
    });
  });
});
