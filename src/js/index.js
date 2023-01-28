import '../scss/styles.scss';
const allCards = document.querySelectorAll('.card');

let firstChoice;
let secondChoice;

const addShow = card => {
  card.classList.add('card--show');
};

const removeShow = card => {
  card.classList.remove('card--show');
};

const checkCards = () => {
  if (firstChoice.dataset.pokemon !== secondChoice.dataset.pokemon) {
    removeShow(firstChoice);
    removeShow(secondChoice);
  } else {
    firstChoice.dataset.correct = true;
    secondChoice.dataset.correct = true;
  }
  firstChoice = undefined;
  secondChoice = undefined;
};

const asignChoice = card => {
  if (card.dataset.selected) return;
  firstChoice ? (secondChoice = card) : (firstChoice = card);
  addShow(card);

  card.addEventListener(
    'transitionend',
    () => {
      if (firstChoice && secondChoice) checkCards();
    },
    { once: true }
  );
};

document.addEventListener('click', ev => {
  if (ev.target.classList.contains('card') && !ev.target.dataset.correct) asignChoice(ev.target);
});

window.addEventListener('load', () => {
  allCards.forEach(card => {
    addShow(card);
  });
  const timeoutId = setTimeout(() => {
    allCards.forEach(card => {
      removeShow(card);
    });
    clearTimeout(timeoutId);
  }, 3000);
});
