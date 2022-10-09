const submitButton = document.querySelector('[data-js="submit-button"]');
const form = document.querySelector('[data-js="form"]');
const card = document.querySelector('[data-js="card"]');
const tagList = document.querySelector('[data-ja="card__tag-list"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');

const bookmarkButton = document.querySelector('[data-js="button__bookmark"]');

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  const cardList = document.createElement("ul");
  document.body.append(cardList);
  cardList.classList.add("card-list");

  const cardListItem = document.createElement("li");
  cardList.append(cardListItem);
  cardListItem.classList.add("card-list__item");

  const newCard = document.createElement("article");
  cardListItem.append(newCard);
  newCard.classList.add("card");

  const cardQuestion = document.createElement("h2");
  newCard.append(cardQuestion);
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = data.yourQuestion;

  const cardButton = document.createElement("button");
  newCard.append(cardButton);
  cardButton.classList.add("card__button-answer");
  cardButton.setAttribute("data-js", "answer-button");
  cardButton.textContent = "Show answer";

  const cardAnswer = document.createElement("p");
  newCard.append(cardAnswer);
  cardAnswer.classList.add("card__answer", "card__button-answer:hover");
  cardAnswer.textContent = data.yourAnswer;

  const cardTag = document.createElement("ul");
  newCard.append(cardTag);
  cardTag.classList.add("card__tag-list");

  const cardTagItem = document.createElement("li");
  cardTag.append(cardTagItem);
  cardTagItem.classList.add("card__tag-list-item");
  cardTagItem.textContent = data.tag;
  // const cardButtonBookmark = document.createElement("div");
  // cardTag.append(cardTagItem);
  // cardTagItem.classList.add("card__tag-list");
});



document
  .querySelector('[data-js="answer-button"]')
  .addEventListener("click", (event) => {
    console.log(event.target);
    cardAnswer.classList.toggle("card__answer--active");
    if (cardAnswer.classList.contains("card__answer--active")) {
      answerButton.textContent = "Hide answer";
    } else {
      answerButton.textContent = "Show answer";
    }
  });
