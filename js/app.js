// ---------------------------
// Constants and persistent state
// ---------------------------
const MOVES = ['rock', 'paper', 'scissors'];

// Score: persisted in localStorage so the player's wins/losses/ties survive page reloads.
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


// ---------------------------
// Outcome lookup map
// ---------------------------
// A simple lookup that maps [playerMove][computerMove] -> 'win'|'lose'|'tie'.
// This removes nested conditionals and is easy to reason about and test.
const OUTCOME_MAP = {
  rock: {
    rock: 'tie',
    paper: 'lose',
    scissors: 'win'
  },
  paper: {
    rock: 'win',
    paper: 'tie',
    scissors: 'lose'
  },
  scissors: {
    rock: 'lose',
    paper: 'win',
    scissors: 'tie'
  }
};


// ---------------------------
// Helpers
// ---------------------------

// pickComputerMove(): selects a random move from MOVES.
function pickComputerMove() {
  const idx = Math.floor(Math.random() * MOVES.length);
  return MOVES[idx];
}

// determineOutcome(playerMove, computerMove): returns 'win'|'lose'|'tie' using OUTCOME_MAP.
function determineOutcome(playerMove, computerMove) {
  return OUTCOME_MAP[playerMove]?.[computerMove] || 'tie';
}


// ---------------------------
// Main game flow
// ---------------------------

// playGame(playerMove): determines outcome, updates score, persists it, and shows a message.
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  const outcome = determineOutcome(playerMove, computerMove);

  // Update score counts using the normalized outcome token.
  if (outcome === 'win') {
    score.wins += 1;
  } else if (outcome === 'lose') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  // Persist the updated score immediately after a round.
  localStorage.setItem('score', JSON.stringify(score));

  // Map the normalized token to a human-readable message for display.
  const OUTCOME_LABEL = outcome === 'win' ? 'You win.' : outcome === 'lose' ? 'You lose.' : 'Tie.';

  // Display result and running totals.
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${OUTCOME_LABEL}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}


// resetScore(): helper to reset in-memory counters and persist zeros to localStorage.
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.setItem('score', JSON.stringify(score));
}