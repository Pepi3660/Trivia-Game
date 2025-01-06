const questions = [
  "What planet is known as the 'Red Planet'?",
  "Who painted the Mona Lisa?",
  "What is the capital of France?",
  "What element does 'O' represent on the periodic table?"
];
const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
  ["Rome", "Berlin", "Paris", "Madrid"],
  ["Oxygen", "Gold", "Silver", "Osmium"]
];
const correctAnswers = ["Mars", "Da Vinci", "Paris", "Oxygen"];
let currentQuestionIndex = 0;
let score = 0;
let attemptsLeft = 3;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').innerHTML = questions[currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
      btn.disabled = false;
    }
    document.getElementById('retryBtn').style.display = 'none';
    document.getElementById('result').innerHTML = "";
  } else {
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}!`;
    document.getElementById('question').innerHTML = "";
    document.getElementById('choices').innerHTML = "";
  }
  document.getElementById('score').innerHTML = `Score: ${score}`;
}

function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
    score++;
    currentQuestionIndex++;
    attemptsLeft = 3; 
    displayQuestion();
  } else {
    attemptsLeft--;
    document.getElementById('result').innerHTML = `Incorrect Answer. Try again. You have ${attemptsLeft} attempts left.`;
    document.getElementById('result').classList.add('red');
    if (attemptsLeft > 0) {
      for (let i = 0; i < 4; i++) {
        document.getElementById(`choice${i + 1}`).disabled = true;
      }
      document.getElementById('retryBtn').style.display = 'inline-block';
    } else {
      document.getElementById('result').innerHTML = "Game Over. You've used all your attempts.";
      document.getElementById('question').innerHTML = "";
      document.getElementById('choices').innerHTML = "";
    }
  }
}

function retry() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`choice${i + 1}`).disabled = false;
  }
  document.getElementById('retryBtn').style.display = 'none';
  document.getElementById('result').innerHTML = "";
  document.getElementById('result').classList.remove('red');
}

displayQuestion();
