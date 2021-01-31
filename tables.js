
var multiplier = Math.floor(Math.random() * (12 - 1 + 1))
var multiplicand = Math.floor(Math.random() * (12 - 1 + 1))
var solution;
document.getElementById("firstpart").innerHTML = multiplier;
document.getElementById("secondpart").innerHTML = multiplicand;

function multiplicationSum() {
  solution = multiplier * multiplicand;
  return solution;
}


function parseAnswer() {
  if (document.getElementById("answer").value == solution) {
    document.getElementById("feedback").innerHTML = "Correct";
  }
}

function nextQuestion() {
  location.reload();
}
