import { fillArray, shuffle } from './randomizer';

const allCards = fillArray(150, 4);
const shuffledCards = shuffle(allCards);

export const createBoard = () => {
  const fragment = document.createDocumentFragment();
  shuffledCards.forEach(number => {
    const cardDiv = document.createElement('div');
    const frontDiv = document.createElement('div');
    const backDiv = document.createElement('div');
    const img = document.createElement('img');
    cardDiv.classList.add('card');
    cardDiv.dataset.pokemon = number;
    frontDiv.classList.add('card__front');
    img.src = `assets/images/${number}.png`;
    img.classList.add('card__image');
    backDiv.classList.add('card__back');
    frontDiv.prepend(img);
    cardDiv.prepend(frontDiv);
    cardDiv.append(backDiv);
    fragment.append(cardDiv);
  });
  return fragment;
};
