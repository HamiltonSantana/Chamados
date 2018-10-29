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
        data: 'chamado1',
        success: function(data){
          console.log(data);
        }
      }
    );
  });
    //.done(function(data){
    //   console.log(data);
    // });
  });
