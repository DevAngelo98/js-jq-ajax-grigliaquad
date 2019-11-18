$(document).ready(function(){

  function controlloValore(){

  }

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