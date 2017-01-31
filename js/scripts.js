// function Puzzle(question) {
//   this.question = question;
//   this.image = puzzle1Img;
//   this.answer = answer;
// }

// var div = document.getElementById();
// img.onload = function() {
//   div.appendChild(puzzle1Img);
// };


function Question(question, image, inputSection) {
  this.question = question;
  this.image = image;
  this.inputSection = inputSection;
}

function Answer(answer) {
  this.answer = answer;
}

Question.prototype.puzQuestion = function () {
  return this.question;
  return this.image;
}

Answer.prototype.puzAnswer = function () {
  if (this.answer !== 3){
  return "Sorry Viking. You cannot proceed with that response.";
} else {
  return "Excellent. You Proceed!"
  }
}

var puzzleQ1 = new Question("Question: Which number should be placed in the empty triangle?", "<br><br><img " + "src='img/numTriangle.jpg'" + ">", "<br><br>" + '<form class="puzzle1Input">' +
  '<div class="form-group">' +
    '<label for="answer">Blundra Your Skrappa!</label>' +
    '<input type="text" class="form-control" id="puzzle1">' + '<br>' +
'</div>' + '<button type="submit" name="button" class="btn btn-primary">Klubba</button>' +
   '</form>');
// var puzzleA1 = new Answer(3)

var puzzleQ2 = new Question('If all Laddies are Razzies and all Razzies are Maddies, all Laddies are definitely Maddies?', "<br><br><img " + "src='img/oldPirate.png'" + ">")
// var puzzleAnswer4 = new Answer(BOOLEAN);


// var puzzleAnswer1 = new Answer(3);
// var puzzle1Img = new Image();

// FRONT END


$(document).ready(function() {
  $(".puzzle1Input").click(function() {
    alert("I was found by JQuery");
  })

  $("#puzzle1Title").click(function() {
    $("#puzzle1Start").append(puzzleQ1.puzQuestion());
    $("#puzzle1Start").append(puzzleQ1.image);
    $("#puzzle1Start").append(puzzleQ1.inputSection);
    $("form").submit(function(event) {
      event.preventDefault();
      var userAnswer = parseInt($("#puzzle1").val());
      console.log($("#puzzle1").val());
      console.log(userAnswer);
      var correctAnswer = new Answer(userAnswer);
      console.log(correctAnswer);
      $("#puzzle1Answer").append(correctAnswer.puzAnswer)
    });
  });

  $("#puzzle2Title").click(function() {
    $("#puzzle2Start").append(puzzleQ2.puzQuestion());
    $("#puzzle2Start").append(puzzleQ2.image);
  });


});
