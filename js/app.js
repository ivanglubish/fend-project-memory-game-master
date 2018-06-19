/*
 * Create a list that holds all of your cards
 */
const cards = document.querySelectorAll('.card');
const resetBtn = document.querySelector('.restart');
let openCards = [];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// shuffle cards
let deck = document.querySelector('.deck'), i;
for ( i = deck.children.length; i >= 0; i--) {
  deck.appendChild(deck.children[Math.random() * i | 0]);
}

/*
//flipping cards
cards.forEach(function(card) {
  card.addEventListener('click', function(e) {
    if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
      openCards.push(card);
      card.classList.add('open', 'show');
      //match cards
      const x = openCards.length;
      if (x === 2) {
        if(openCards[0].innerHTML === openCards[1].innerHTML) { // -----
          openCards[0].classList.add('match');
          openCards[1].classList.add('match');
          openCards[0].classList.remove('show', 'open');
          openCards[1].classList.remove('show', 'open');
          openCards = [];

        } else {
          setTimeout(function() {
            openCards.forEach(function(card) {
              card.classList.remove('open', 'show');
            });
            openCards = [];
          }, 1000);
        }
      }
    }
  });
});
*/


/*
//6 restart button
resetBtn.addEventListener('click', function() {
  clearTimer();
  newGame();
  startTimer();
});

//7 congratulation modal
function endGame() {
  if (openCards.length === 16) {
    document.getElementrById('win').innerHTML = 'YOU WON, CONGRATULATION \n play again press Restart';
  }
}
*/


/*
resetBtn.addEventListener('click', function() {
  clearTimer();
  startTimer();
});
*/







/*


/*
//compare cards
function compareCards() {}


function gameOver() {}
//3move counter


//4 star raiting



//5 timer



*/




/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
