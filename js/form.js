const submitButton = document.querySelector('[data-js="submit-button"]');
const form = document.querySelector('[data-js="form"]');
const card = document.querySelector('[data-js="card"]');
const tagList = document.querySelector('[data-ja="card__tag-list"]');

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  const newCard = document.createElement("article");
  document.body.append(newCard);
  newCard.classList.add("card");

  const cardQuestion = document.createElement("h2");
  card.append(cardQuestion);
  cardQuestion.classList.add("card__question");

  const cardButton = document.createElement("button");
  card.append(cardButton);
  cardQuestion.classList.add("ard__button-answer");

  const cardAnswer = document.createElement("p");
  card.append(cardAnswer);
  cardAnswer.classList.add("card__answer", "card__button-answer:hover");

  const cardTag = document.createElement("ul");
  card.append(cardTag);
  cardTag.classList.add("card__tag-list");

  const cardTagItem = document.createElement("li");
  tagList.append(cardTagItem);
  cardTagItem.classList.add("card__tag-list");
});
