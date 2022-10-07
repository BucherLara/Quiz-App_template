const card = document.querySelector('[data-js="card"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const bookmarkButton = document.querySelector('[data-js="button__bookmark"]');

answerButton.addEventListener("click", (event) => {
  console.log(event.target);
  cardAnswer.classList.toggle("card__answer--active");
  if (cardAnswer.classList.contains("card__answer--active")) {
    event.target.textContent = "Hide answer";
  } else {
    event.target.textContent = "Show answer";
  }
});

bookmarkButton.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.classList.toggle("bookmark--active");
});
