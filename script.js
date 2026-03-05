//your JS code here.

const questionsElement = document.getElementById("questions");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");

// Load saved progress from sessionStorage
let userAnswers = JSON.parse(sessionStorage.getItem("progress")) || {};

// Load saved score from localStorage
const savedScore = localStorage.getItem("score");
if (savedScore !== null) {
  scoreElement.textContent = "Your score is " + savedScore + " out of 5.";
}

// Listen for answer selection (Event Delegation)
questionsElement.addEventListener("change", function (event) {
  if (event.target.type === "radio") {
    const questionIndex = event.target.name.split("-")[1];
    userAnswers[questionIndex] = event.target.value;

    sessionStorage.setItem("progress", JSON.stringify(userAnswers));
  }
});

// Handle Submit
submitButton.addEventListener("click", function () {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  scoreElement.textContent = "Your score is " + score + " out of 5.";

  localStorage.setItem("score", score);
});
