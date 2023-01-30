import '../scss/styles.scss';

import { asignChoice, newGame } from './game-manager';
import { createBoard } from './new-board';
const boardGame = document.getElementById('boardgame');

boardGame.addEventListener('click', ev => {
  if (ev.target.classList.contains('card') && !ev.target.dataset.correct) asignChoice(ev.target);
});

window.addEventListener('load', () => {
  boardGame.append(createBoard());
  newGame();
});
