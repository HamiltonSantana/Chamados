$().ready(function(){
  $(".bt-Pesquisa").click(function(){
  
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
