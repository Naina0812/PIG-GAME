'use strict';
const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const Current0 = document.querySelector('#current--0');
const Current1 = document.querySelector('#current--1');
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');
let activePlayer = 0;
let playing = true;

btnRoll.addEventListener('click', function(){
   if(playing === true){
      let diceNo = Math.trunc(Math.random() * 6) + 1;
      dice.classList.remove('hidden');
      dice.src = `dice-${diceNo}.png`;
      
      if(diceNo !== 1){
         let currentScore = Number(document.querySelector(`#current--${activePlayer}`).textContent);

         document.querySelector(`#current--${activePlayer}`).textContent = currentScore + diceNo;
      }

      else{
         document.querySelector(`#current--${activePlayer}`).textContent = 0;
         activePlayer = activePlayer === 0 ? 1 : 0;
         player0.classList.toggle('player--active');
         player1.classList.toggle('player--active');
      }
   } 
})

btnHold.addEventListener('click', function(){
   if(playing===true){
    let currentScore = Number(document.querySelector(`#current--${activePlayer}`).textContent);
    let score = Number(document.querySelector(`#score--${activePlayer}`).textContent);

    console.log(currentScore,typeof currentScore, score, typeof score);
      document.querySelector(`#score--${activePlayer}`).textContent = currentScore + score ;

      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      
      
      let activeScore =currentScore + score ;

      if(activeScore > 20){
         playing = false;
         console.log(playing);
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

         document.querySelector('.dice').classList.add('hidden');
      }
      else{
         activePlayer = activePlayer === 0 ? 1 : 0;
         player0.classList.toggle('player--active');
         player1.classList.toggle('player--active');
      }
   } 
})

btnNew.addEventListener('click', function(){
   score0El.textContent = 0;
   score1El.textContent = 0;
   Current0.textContent = 0;
   Current1.textContent = 0;

   dice.classList.add('hidden');
   if(document.querySelector(`.player--0`).classList.contains('player--winner')){
      document.querySelector(`.player--0`).classList.remove('player--winner');
      document.querySelector(`.player--0`).classList.add('player--active');
   }
   else if(document.querySelector(`.player--1`).classList.contains('player--winner')){
      document.querySelector(`.player--1`).classList.remove('player--winner');
      // document.querySelector(`.player--0`).classList.add('player--active');
   }
   
   activePlayer = 0;
   playing = true;
   
})
