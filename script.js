// ===== YOUR CODE STARTS HERE =====

// Make these GLOBAL so renderQuestions() can use them
const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

// Load saved progress (must exist BEFORE renderQuestions runs)
let userAnswers = {};
const savedProgress = sessionStorage.getItem("progress");
if (savedProgress) {
  userAnswers = JSON.parse(savedProgress);
}

// Load saved score from localStorage
const savedScore = localStorage.getItem("score");
if (savedScore !== null) {
  scoreElement.textContent = "Your score is " + savedScore + " out of 5.";
}

// Save progress when selecting radio
questionsElement.addEventListener("change", function (event) {
  if (event.target.type === "radio") {
    const index = event.target.name.split("-")[1];
    userAnswers[index] = event.target.value;

    sessionStorage.setItem("progress", JSON.stringify(userAnswers));
  }
});

// Submit logic
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

// ===== YOUR CODE ENDS HERE =====
