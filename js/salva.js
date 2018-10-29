$().ready(function(){
  $(".bt-teste").click(function(){
    var valor = $("#titulo-chamado").val();
    var conteudo = $("#conteudo-chamado").val();
    console.log(valor);
    console.log(conteudo);
    // $.ajax({
    //   url: '/salva',
    //   type: 'POST',
    //   contentType: 'application/json',
    //   data: {
    //     titulo: valor,
    //     conteudo: conteudo
    //   },
    //   success: function(data){
    //     console.log(data);
    //   }
    // });

    var json = {
      titulo: valor,
      conteudo: conteudo
    };

    $.post('/salva', json, function(data){
      console.log(data);
    }, 'json');
  });
});
