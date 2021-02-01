
var multiplier = Math.floor(Math.random() * (12 - 1 + 1))
var multiplicand = Math.floor(Math.random() * (12 - 1 + 1))
var solution = multiplier * multiplicand;
document.getElementById("firstpart").innerHTML = multiplier;
document.getElementById("secondpart").innerHTML = multiplicand;


function parseAnswer() {
  if (document.getElementById('MyAnswer').value == solution) {
    document.getElementById('feedback').innerHTML = "Correct";
    console.log("correct");
  }
  else {
    document.getElementById('feedback').innerHTML = "Incorrect";
    console.log("incorrect");
  }
}

function nextQuestion() {
  location.reload();
}
