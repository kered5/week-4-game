

    $(document).ready(function() {

      // declare variables

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

//Initialize game
initgame();
//Run Main game code block
maingame();

//Init game function
function initgame(){

//Reset score and newval variables
score=0;
newval=0;

//Generate a random number between 19 and 120
random = Math.floor(Math.random() * 100) + 20;


//Output random number to relevant ID
      $("#random-number").text(random);

//Generate the 4 values for each of the telly tubbies between 1 and 12

val1 = Math.floor(Math.random() * 12) + 1;
val2 = Math.floor(Math.random() * 12) + 1;
val3 = Math.floor(Math.random() * 12) + 1;
val4 = Math.floor(Math.random() * 12) + 1;

//Output ??? to the value IDs so that the user doesn't know the actual values

$("#val1").text("???");
$("#val2").text("???");
$("#val3").text("???");
$("#val4").text("???");

//Initialize the current score ID
$("#currentscore").text(score);

}

//Function to check the status of the game
function gamecheck(newval){

//Add clicked value to the total
score += newval;
//Output updated score to the current score ID
 $("#currentscore").text(score);

//Check if the score equals the target, add to the wins total if it is and initialize for the next target number
if (score == random){
  wins++
  $("#wins").text(wins);
  initgame();
  //Check if score has exceeded the target, if so add to the losses total the re-initialize for the next target number
}
if (score > random){
  losses++
  $("#losses").text(losses);
  initgame();
}


}

//Main Game function

function maingame(){

      // When telly1 image is clicked output the value to the correct ID and check the game status
      $("#telly1").on("click", function() {
      $("#val1").text(val1);
        gamecheck(val1);

      });
      // When telly2 image is clicked output the value to the correct ID and check the game status
        $("#telly2").on("click", function() {
        $("#val2").text(val2);
        gamecheck(val2);

      });
      // When telly3 image is clicked output the value to the correct ID and check the game status
        $("#telly3").on("click", function() {
        $("#val3").text(val3);
        gamecheck(val3);

      });
      // When telly4 image is clicked output the value to the correct ID and check the game status
      $("#telly4").on("click", function() {
      $("#val4").text(val4); 
      gamecheck(val4);

      });


}





    });

