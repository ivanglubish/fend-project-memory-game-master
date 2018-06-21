/*
 * Create a list that holds all of your cards
 */
const cards = document.querySelectorAll('.card');
const reset = document.querySelector('.restart');
const moveCounter = document.querySelector('.moves');
let openCards = [];
let moves = 0;
const stars = document.querySelector('.stars');
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

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
function newGame() {
  let deck = document.querySelector('.deck'), i;
  for ( i = deck.children.length; i >= 0; i--) {
    deck.appendChild(deck.children[Math.random() * i | 0]);
  }
  moves = 0;
  moveCounter.innerText = moves;

}

newGame();

//flipping cards
cards.forEach(function(card) {
  card.addEventListener('click', function(e) {
    if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
      openCards.push(card);
      card.classList.add('open', 'show');

      //matched cards
      const x = openCards.length;
      if (x == 1 && moves < 1){
          startTimer();
        }
      if (x === 2) {
        if(openCards[0].innerHTML === openCards[1].innerHTML) {
          openCards[0].classList.add('match');
          openCards[1].classList.add('match');
          openCards[0].classList.remove('show', 'open');
          openCards[1].classList.remove('show', 'open');
          openCards = [];

        } else { //unmatched cards
          setTimeout(function() {
            openCards.forEach(function(card) {
              card.classList.remove('open', 'show');
            });
            openCards = [];
          }, 1000);
        }

        moves += 1;
        moveCounter.innerText = moves;

        removeStars();
      }
    }
    endGame();
  });
});

//stars raiting
function removeStars() {
  if (moves === 10 || moves === 14) {
    stars.removeChild(stars.lastElementChild);
  }
}

//restart button
setTimeout(function restart() {
  const reset = document.querySelector('.restart');
  reset.addEventListener('click', function(event) {
    for ( let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('match');
    }
    openCards.forEach(function(card) {
      card.classList.remove('open', 'show');
    });
    newGame();
    clearTimer();
    startTimer();
  });
});

//start timer
let sec = 0;
let min = 0;
let timer = document.querySelector('.timer');
let y;
function startTimer() {
  y = setInterval(function() {
//    timer.innerHTML = min + 'min ' + sec + 'sec';
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hit++;
      min = 0;
    }
  }, 1000);
}

function clearTimer() {
  clearInterval(y);
  sec = 0;
  min = 0;
}




//congratulation modal
function endGame() {
  let muv = document.querySelector('.moves');
  let z = document.querySelectorAll('.match');
  let finalStars = document.querySelector('.stars').innerHTML;
  document.getElementById('finalStars').innerHTML = finalStars;
  if (z.length === 2) {
    alert('YOU WON, CONGRATULATION \nyour score ' + min + ' minute ' + sec + ' seconds\n' + moveCounter.innerText + ' moves' + finalStars + '\nplay again press Restart');
  }
}

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
