$('document').ready( function() {
  $("#div1").fadeIn(2250);
  $("#div2").fadeIn(2750);
  $("#div3").fadeIn(2750);
  $("#div4").fadeIn(2750);
  $("#div5").fadeIn(2750); 
  $("#div6").fadeIn(2750); 
  $("#div7").fadeIn(2750);

  $("#div2").hover(function(){
      $("#div2").css("background-color", "#3399FF");
      },function(){
      $("#div2").css("background-color","blue");
    });
  $("#div3").hover(function(){
      $("#div3").css("background-color","#FF6666");
      },function(){
      $("#div3").css("background-color","#CC0000");
    });
  $("#div4").hover(function(){
      $("#div4").css("background-color","#FF9966");
      },function(){
      $("#div4").css("background-color","#FF6633");
    });
  $("#div5").hover(function(){
      $("#div5").css("background-color","#FFFF99");
      },function(){
      $("#div5").css("background-color","#FFFF33");
    });
  $("#div6").hover(function(){
      $("#div6").css("background-color","#66FF66");
      },function(){
      $("#div6").css("background-color","#33CC66");
    });
  $("#div7").hover(function(){
      $("#div7").css("background-color","#CC66FF");
      },function(){
      $("#div7").css("background-color","#993399");
    });

  $(".futurelink").click(function() {
  alert( "This will link to another page in the future! Until then, check out the information below." );
  });


 
  
});