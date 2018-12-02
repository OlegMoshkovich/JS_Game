/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice;
scores = [0,0];
roundScore = 0;
activePlayer = 0;


// document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// var x = document.querySelector('#current-' + activePlayer).textContent
document.querySelector('.dice').style.display='none'
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-hold').addEventListener('click', function(){
  // if the hold button is pressed take the current score and transfer it to the total score of the appropriate player
  document.querySelector('#current-'+activePlayer).textContent = 0
  //store the current score in the array
  scores[activePlayer] += roundScore;
  //display the current score in the box
  document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
  //give the turn to the other player by toggling the active class
  if(scores[activePlayer] >= 10 ){

    document.querySelector('#name-'+activePlayer).textContent = 'WON'
    document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner')
  }
  nextPlayer();
  //check if player won the game

})

document.querySelector('.btn-roll').addEventListener('click',function(){
  //1. generate the random number
  var dice = Math.floor(Math.random()*6)+1;
  var diceDOM =   document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src = "dice-"+dice+".png";
  //2. display the correct dice number
  //3. update the round score if the rolled number was not the one
  if(dice !== 1){
  //add score
  roundScore += dice;
  document.querySelector('#current-'+ activePlayer).textContent = roundScore;
  }else{
    nextPlayer();
  }
    document.querySelector('.dice').style.display = 'block';
  }
)

function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle("active");
  document.querySelector('.player-1-panel').classList.toggle("active");
  document.querySelector('.dice').style.display='none';
}
