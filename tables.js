
var multiplier = Math.floor(Math.random() * (13 - 1 + 1))
var multiplicand = Math.floor(Math.random() * (13 - 1 + 1))
var solution = multiplier * multiplicand;
document.getElementById("firstpart").innerHTML = multiplier;
document.getElementById("secondpart").innerHTML = multiplicand;


function parseAnswer() {
  if (document.getElementById('MyAnswer').value == solution) {
    document.getElementById('feedback').innerHTML = "Correct! The answer is <strong>" + solution + "</strong>.";
    document.getElementById("feedback").style.color = "green";
    console.log("correct");
  }
  else {
    document.getElementById('feedback').innerHTML = "Sorry, the answer is <strong>" + solution + "</strong>.";
    document.getElementById("feedback").style.color = "red";
    console.log("incorrect");
  }
}

function nextQuestion() {
  location.reload();
}
