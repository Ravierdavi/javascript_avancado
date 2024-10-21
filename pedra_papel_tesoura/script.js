const resultDisplay = document.querySelector("#gameResult");
const userChoiceDisplay = document.querySelector("#myChoice");
const robotChoiceDisplay = document.querySelector("#robotChoice");
const gameChoices = document.querySelectorAll(".game-choice");

class Game {
  constructor(resultDisplay, userChoiceDisplay, robotChoiceDisplay) {
    this.resultDisplay = resultDisplay;
    this.userChoiceDisplay = userChoiceDisplay;
    this.robotChoiceDisplay = robotChoiceDisplay;
    this.choices = ["👊", "✋", "✌"];
    this.points = 0;
  }

  getRandomChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  playRound(userChoice) {
    const robotChoice = this.getRandomChoice();
    this.updateChoices(userChoice, robotChoice);
    this.updateResult(userChoice, robotChoice);
  }

  updateChoices(userChoice, robotChoice) {
    this.userChoiceDisplay.textContent = userChoice;
    this.robotChoiceDisplay.textContent = robotChoice;
  }

  updateResult(userChoice, robotChoice) {
    if (userChoice === robotChoice) {
      this.displayResult("Empate!", "blue");
    } else if (
      (userChoice === "👊" && robotChoice === "✌") ||
      (userChoice === "✋" && robotChoice === "👊") ||
      (userChoice === "✌" && robotChoice === "✋")
    ) {
      this.points++;
      this.displayResult("Vitória!", "greenyellow");
    } else {
      this.points--;
      this.displayResult("Derrota!", "red");
    }
    setTimeout(() => this.updatePoints(), 1000);
  }

  displayResult(message, color) {
    this.resultDisplay.style.textAlign = "center";
    this.resultDisplay.style.color = color;
    this.resultDisplay.value = message;
  }

  updatePoints() {
    this.resultDisplay.style.textAlign = "right";
    this.resultDisplay.style.color = this.points >= 0 ? "greenyellow" : "red";
    this.resultDisplay.value = this.points;
  }
}

const game = new Game(resultDisplay, userChoiceDisplay, robotChoiceDisplay);

gameChoices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    game.playRound(event.target.textContent);
  });
});
