$().ready(function(){
  $(".bt-Pesquisa").click(function(){
    var valor = $(".pesquisa").val();
    console.log(valor);
    $.ajax(
    //   {
    //   url:'/consulta',
    //   type: 'POST',
    //   contentType: 'application/json',
    //   data: JSON.stringify({'chamado': valor})
    // }
    {
        url: '/consulta',
        type: 'POST',
        contentType: 'application/json',
        dataType: "text",
        data: 'chamado1.txt',
        success: function(data){
          console.log(JSON.parse(data));
          $(".bt-Pesquisa").after("<p>"+JSON.parse(data)['conteudo']+"</p>");
        }
      }
    );
  });
    //.done(function(data){
    //   console.log(data);
    // });
  });
