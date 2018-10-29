$().ready(function(){
  $(".bt-Pesquisa").click(function(){
    var valor = $(".pesquisa").val();
    console.log(valor);
    $.ajax({
      url:'/consulta',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({'chamado': valor})
    }
    // {
    //   url: '/consulta',
    //   type: 'GET',
    //   contentType: 'application/json',
    //   dataType: "text"
    // }
  );
    //.done(function(data){
    //   console.log(data);
    // });
  });
});
