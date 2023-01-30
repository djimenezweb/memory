let randomCards = [];

const randomNumber = number => {
  return Math.floor(Math.random() * number + 1);
};

export const shuffle = array => {
  const newArray = [...array];
  for (let i = newArray.length - 1, r; i; i--) {
    r = Math.floor(Math.random() * i);
    [newArray[i], newArray[r]] = [newArray[r], newArray[i]];
  }
  return newArray;
};

export const fillArray = (totalCards, playedCards) => {
  const number = randomNumber(totalCards);
  randomCards.push(number);
  randomCards = [...new Set(randomCards)];
  if (randomCards.length === playedCards) return [...randomCards, ...randomCards];
  return fillArray(totalCards, playedCards);
};
