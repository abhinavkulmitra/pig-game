/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- Also, if the player rolls two 6 in a row, all his ROUND score gets lost. After all, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*- MODIFICATION - an input of score will decide the winning score */
var scores, roundScore, activePlayer, gamePlaying, input;

init();


  // when clicked on roll btn
  document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
    // 1. Random no. 
     var dice = Math.floor(Math.random() * 6) + 1;

    //2. display the result
      

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';    
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 3.Update the score IF the no. is NOT 1.
    if(dice !== 1){
      //  No. add to current
     
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      console.log(roundScore);
    } 
    else {
    //  Next PLayer
    nextPlayer();
    console.log('when 1 ACTIVE PLAY', activePlayer);
    }
  }
  });




    // Making the game HOLD the current points

  document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
     //   Add current score to global score
   
    //  trying*****
  scores[activePlayer] += roundScore;
    
  // print the result in UI
  
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  
   // to take input from the user
   input = document.querySelector('.final-score').value;
   
   var winningScore;
  //  anything undefined, 0, null and '' is false

  if(input){
       winningScore = input;
   }else{
       winningScore = 100;
   }
  // check if player won the game and if Not then next player's turn
   if(scores[activePlayer]>= winningScore){
//     WON THE GAME !!
    document.querySelector('#name-' + activePlayer).textContent = 'Winner !'; 
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
   }
   else{
//    Next's turn
    nextPlayer();
    console.log('when not 100', activePlayer);
   }

   }
 
   });




      
// DRY principle says Don't Repeat Yourself
  
  function nextPlayer() {
      //       Next Player
      // activePlayer === 0 ? activePLayer = 1 : activePlayer = 0;
      if(activePlayer ===0){
        activePlayer = 1;
      }
      else{
        activePlayer = 0;
      }
      roundScore = 0;
    
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
      
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');                                                                                                                                                                                                                                  
                        
      // document.querySelector('.player-0-panel').classList.remove('active');
      // document.querySelector('.player-1-panel').classList.add('active');
      
      document.querySelector('.dice').style.display = 'none';
    
  };





//New game button
// trying
document.querySelector('.btn-new').addEventListener('click',init);

function init (){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;



  document.querySelector('.dice').style.display = 'none';
 
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1'; 
  document.getElementById('name-1').textContent = 'Player 2'; 
  document.querySelector('#name-0').classList.remove('winner');
  document.querySelector('#name-1').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  
};









  // document.querySelector('.dice').style.display = 'none';

  // document.querySelector('#score-0').textContent = '0';
  // document.querySelector('#score-1').textContent = '0';

  // document.getElementById('current-0').textContent = '0'; 
  // document.getElementById('current-1').textContent = '0'; 

  // activePlayer === 1? activePLayer = 0: activePlayer = 1;

  // document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
  







