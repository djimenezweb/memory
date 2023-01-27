import '../scss/styles.scss';
const allCards = document.querySelectorAll('.card');

let firstChoice;
let secondChoice;

const flipCard = card => {
  console.log('CARD---', card);
  card.classList.toggle('card--show');
};

const checkCards = () => {
  console.log(firstChoice.dataset.pokemon === secondChoice.dataset.pokemon);
  if (firstChoice.dataset.pokemon !== secondChoice.dataset.pokemon) {
    flipCard(firstChoice);
    flipCard(secondChoice);
  }
  firstChoice = undefined;
  secondChoice = undefined;
};

const asignChoice = card => {
  console.log(card.dataset.selected);
  if (card.dataset.selected) return;
  card.dataset.selected = true;
  firstChoice ? (secondChoice = card) : (firstChoice = card);
  flipCard(firstChoice);
  if (firstChoice && secondChoice) checkCards();
};

document.addEventListener('click', ev => {
  if (!ev.target.classList.contains('card')) return;
  asignChoice(ev.target);
});

window.addEventListener('load', () => {
  allCards.forEach(card => {
    flipCard(card);
  });
  const timeoutId = setTimeout(() => {
    allCards.forEach(card => {
      flipCard(card);
    });
    clearTimeout(timeoutId);
  }, 1000);
});
