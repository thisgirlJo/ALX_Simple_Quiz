function checkAnswer() {
    var correctAnswer = "4";
    var userAnswer = document.querySelector(name="quiz")
    userAnswer = userAnswer.value;

    if (userAnswer) {
        const feedback = document.getElementById("feedback");
        feedback.textContent = "checked";
    }
    if (userAnswer === correctAnswer) {
        const feedback = document.getElementById("feedback");
        feedback.textContent = "Correct! Well done.";
    }
    else {
        const feedback = document.getElementById("feedback");
        feedback.textContent = "That's incorrect. Try again!";
    }
}
var submitAnswer = document.getElementById("submit-answer");
button.addEventListener("click", checkAnswer);
