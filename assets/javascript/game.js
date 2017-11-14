

    $(document).ready(function() {

var wins=0;
var losses=0;
var score=0;
var wins=0;
var losses=0;
var newval=0;
var random;
var val1=0;
var val2=0;
var val3=0;
var val4=0;

initgame();
maingame();
function initgame(){

score=0;
newval=0;
random = Math.floor(Math.random() * 100) + 20;

      $("#random-number").text(random);

val1 = Math.floor(Math.random() * 12) + 1;
val2 = Math.floor(Math.random() * 12) + 1;
val3 = Math.floor(Math.random() * 12) + 1;
val4 = Math.floor(Math.random() * 12) + 1;

$("#val1").text("???");
$("#val2").text("???");
$("#val3").text("???");
$("#val4").text("???");

$("#currentscore").text(score);

}

function gamecheck(newval){

score += newval;

 $("#currentscore").text(score);


if (score == random){
  wins++
  $("#wins").text(wins);
  initgame();
}
if (score > random){
  losses++
  $("#losses").text(losses);
  initgame();
}


}


function maingame(){

      // When telly1 button 
      $("#telly1").on("click", function() {
      $("#val1").text(val1);
        gamecheck(val1);

      });

        $("#telly2").on("click", function() {
        $("#val2").text(val2);
        gamecheck(val2);

      });

        $("#telly3").on("click", function() {
        $("#val3").text(val3);
        gamecheck(val3);

      });

      $("#telly4").on("click", function() {
      $("#val4").text(val4); 
      gamecheck(val4);

      });


}





    });

