const total = document.getElementById('total');
const fails = document.getElementById('fails');
let firstChoice;
let secondChoice;
let totalCounter = 0;
let failsCounter = 0;

const addShow = card => {
  card.classList.add('card--show');
};

const removeShow = card => {
  card.classList.remove('card--show');
};

export const newGame = () => {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    addShow(card);
  });
  const timeoutId = setTimeout(() => {
    allCards.forEach(card => {
      removeShow(card);
    });
    clearTimeout(timeoutId);
  }, 2000);
};

const checkCards = () => {
  if (firstChoice.dataset.pokemon !== secondChoice.dataset.pokemon) {
    removeShow(firstChoice);
    removeShow(secondChoice);
    failsCounter++;
    fails.textContent = failsCounter;
  } else {
    firstChoice.dataset.correct = true;
    secondChoice.dataset.correct = true;
    totalCounter++;
    total.textContent = totalCounter;
  }
  firstChoice = undefined;
  secondChoice = undefined;
};

export const asignChoice = card => {
  if (firstChoice && secondChoice) return;
  if (card.dataset.selected || card.dataset.correct) return;
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
