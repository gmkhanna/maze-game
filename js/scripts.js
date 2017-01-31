// function Puzzle(question) {
//   this.question = question;
//   this.image = puzzle1Img;
//   this.answer = answer;
// }

function Question(question, image) {
  this.question = question;
  this.image = image;
}

function Answer(answer) {
  this.answer = answer;
}

Question.prototype.question1 = function () {
  return this.question;
}
// Puzzle.prototype.fullPuzzle = function () {
//   if (this.answer !== 3){
//   return "Sorry Viking. You cannot proceed with that response.";
// } else {
//   return "Excellent. You Proceed!"
//   }
// }

var puzzleQ1 = new Question("Question: Which figure should be placed in the empty triangle?");
var puzzleAnswer1 = new Answer(3);

var puzzleQ2 = new Question('Question: Which one of the five choices makes the best comparison? OCTOPUS is to SUPOTCO as 462517 is to:');
var puzzleAnswer2 = new Answer(715264);

var puzzleQ3 = new Question('Which larger shape would be made if the two sections are fitted together?');
var puzzleAnswer2 = new Answer(AN IMAGE);

var puzzleQ4 = new Question('If all Bloops are Razzies and all Razzies are Lazzies, all Bloops are definitely Lazzies?')
var puzzleAnswer4 = new Answer(BOOLEAN);


// FRONT END


$(document).ready(function() {

  $(".puzzleTitle").click(function() {
    $("#puzzle1Start").text(puzzleQ1.question1());
    $("#puzzle1Start").show("img/numTriangle.jpg");
  });

});
