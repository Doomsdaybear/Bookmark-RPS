//The most primitive AI ever.
var input = prompt("Rock,paper, or scissors? (r/p/s)")
function Input() {
  prompt("Rock,paper,or scissors? (r/p/s)")
}
if(input == "r"){
 var choosing = Math.floor(Math.random() * 4)
 if(choosing == 0){
   alert("Whoops!Bot chose 0, nobody wins!");
   
 } 
 if(choosing == 1){
    
    alert("Rock, its a tie");
    
  }
  if(choosing == 2){
    console.log("Bot chose paper")
    alert("Paper,bot wins!");
    
  }
  if(choosing == 3){
    alert("Scissors, you win!");
    
  }
}
if(input == "p"){
  var choosing = Math.floor(Math.random() * 4)
  if (choosing == 0) {
    alert("Bot picks 0! This is a bug, please ignore it and try again!");
  }
  if(choosing == 1){
    alert("Rock, you win!");
  }
  if(choosing == 2){
    alert("Paper, its a tie");
    
  }
  if(choosing == 3){
    alert("Scissors, bot wins!")
  }
}
if(input == "s"){
   var choosing = Math.floor(Math.random() * 4)
  if (choosing == 0) {
    alert("Bot Picks 0! This is a bug, so ignore it and try again.");
  }
   if(choosing == 1){
     alert("Rock,bot wins!")
   }
  if(choosing == 2){
    alert("Paper,you win!")
  }
  if(choosing == 3){
    alert("Scissors, its a tie")
  }
   }
