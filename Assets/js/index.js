function quizBody() {
  function buildQuiz() {
    const output = [];

    myQuestions,
      forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (number in currentQuestion.answers) {
          answers.push(
            `<label>
                            <input type="radio" name="question${questionNumber}" value="${number}">
                            ${number} :
                            ${currentQuestion.answers[number]}
                        </label>`
          );
        }

        output.push(
          `<div class="slide">
                        <div class="question">${currentQuestion.question}</div>
                        <div class="answers">${answers.join("")}</div>
                    </div>`
        );
      });
    quizContainer.innerHTML = output.join("");
  }
}
