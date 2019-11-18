$(document).ready(function(){

  var source = $("#template").html();
  var template = Handlebars.compile(source);
  
  for(var i=0; i<6; i++){
    $(".container").append(template);
  }
  console.log(template);
  
 
  $(".col").click(function(){
    var col = $(this);
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(datoRicevuto){
        console.log(datoRicevuto);
        if(datoRicevuto.response>5){
          col.html(datoRicevuto.response);
          col.addClass("verde");
        } else if(datoRicevuto.response<=5){
          col.html(datoRicevuto.response);
          col.addClass("giallo");
        }
      },
      error: function(richiesta, stato){
        console.log("Errore " + stato);
      }
    });

  });


  



});