// Business logic
var storedPuzzles = [];

function Puzzle(title, question, image, label, answer) {
  this.title = title;
  this.question = question;
  this.image = image;
  this.questionLabel = label;
  this.questionAnswer = answer;
  storedPuzzles.push(this);
}

var pickedPuzzle;

function randomPuzzle() {
  console.log(storedPuzzles);
  pickedPuzzle = storedPuzzles[Math.floor(Math.random() * storedPuzzles.length)];
  return pickedPuzzle;
}

function Answer(answer) {
  this.userAnswer = answer;
}

Answer.prototype.compare = function (currentPuzzle) {
  if (this.userAnswer === currentPuzzle) {
    return true;
  } else {
    return false;
  }
}

function Radio(title, question, image, label0, label1, label2, label3, answer) {
  this.title = title;
  this.question = question;
  this.image = image;
  this.label0 = label0;
  this.label1 = label1;
  this.label2 = label2;
  this.label3 = label3;
  this.questionAnswer = answer;
  storedPuzzles.push(this);
}


var puzzleQ1 = new Puzzle("The Bermuda Triangle", "Question: Which number should be placed in the empty triangle?", "<img " + "src='img/numTriangle.jpg'" + ">", "Blundra Your Skrappa!", '3');

var puzzleQ4 = new Puzzle("Docking Spot", "Question: In what dock number is the faering docked?", "<img " + "src='img/parkingspacepuzzle.png'" + ">", 'benzla', '87');

var puzzleQ3 = new Radio("No Food Reserves", "In a voyage to hunt for hide, you depleted your food sources. How can you survive for two days in the wilderness without food?", "<img " + "src='img/sourceFood.jpg'" + '>', "Mushrooms, moss and fungal growth.", "Small, green leafy plants.", "Insects, and small furry animals.", "Grasses and the bark of young trees.", "2");
// var puzzleQ2 = new Puzzle('If all Laddies are Razzies and all Razzies are Maddies, all Laddies are definitely Maddies?', "<img " + "src='img/oldPirate.png'" + ">")

// User logic
$(document).ready(function() {
  function puzzleQuestion(puzzleQuestion) {
    $("#puzzle").show();
    $('#map').hide();
    $("#title").text(puzzleQuestion.title);
    $("#question").text(puzzleQuestion.question);
    $("#question").append(puzzleQuestion.image);
    $("#label").text(puzzleQuestion.questionLabel);

    $("form").submit(function(event) {
      event.preventDefault();
      var currentAnswer = new Answer($("#answer").val());
      var correctAnswer = puzzleQuestion.questionAnswer;
      if (currentAnswer.compare(correctAnswer)) {
        $('#puzzle').hide();
        $("#response").text("Excellent. You Proceed!");
        $('#response').show();
        $("#response").delay(2000).fadeOut();
        $('#map').show();
      } else {
        $("#response").text("Sorry Viking. You cannot proceed with that response.");
        $('#response').show();
        $("#response").delay(2000).fadeOut();
      }
    });
  }

  function radioQuestion(radioQuestion) {
    $("#radioSec").show();
    $("#radioTitle").text(radioQuestion.title);
    console.log(radioQuestion.title);
    $("#radioQuestion").text(radioQuestion.question);
    $("#radioQuestion").append(radioQuestion.image);
    $(".label0").append(radioQuestion.label0);
    $(".label1").append(radioQuestion.label1);
    $(".label2").append(radioQuestion.label2);
    $(".label3").append(radioQuestion.label3);

    $("form").submit(function(event) {
      event.preventDefault();
      var currentAnswer = new Answer($("input:radio[name=radioChoice]:checked").val());
      var correctAnswer = radioQuestion.questionAnswer;
      if (currentAnswer.compare(correctAnswer)) {
        $('#radioSec').hide();
        $("#radioResponse").text("Excellent. You Proceed!");
        $('#radioResponse').show();
        $("#radioResponse").delay(2000).fadeOut();
        $('#map').show();
      } else {
        $("#radioResponse").text("Sorry Viking. You cannot proceed with that response.");
        $('#radioResponse').show();
        $("#radioResponse").delay(2000).fadeOut();
      }
    });
  }
//     if (currentAnswer.compare(correctAnswer)) {
//       $("#radioSec").delay(2000).fadeOut();
//       $(".two").fadeIn();
//       $("#radioResponse").text("Excellent. You Proceed!");
//     } else {
//       $("#radioResponse").text("Sorry Viking. You cannot proceed with that response.");
//     }

  // $("#puzzle2Title").click(function() {
  //   $("#puzzle2Start").text(puzzleQ2.puzQuestion());
  //   $("#puzzle2Start").append(puzzleQ2.image);
  // });



  $("button#r1c1-right").click(function () {
    $(".one").fadeOut();
    radioQuestion(randomPuzzle());
    $(".two").fadeIn();

  });

  $("button#r1c1-down").click(function() {
    $(".one").fadeOut();
    $(".seven").fadeIn();
  })
  $("button#r1c2-right").click(function() {
    $(".two").fadeOut();
    $(".three").fadeIn();
  })
  $("button#r1c2-left").click(function() {
    $(".two").fadeOut();
    $(".one").fadeIn();
  })
  $("button#r1c2-down").click(function() {
    $(".two").fadeOut();
    $(".eight").fadeIn();
  })
  $("button#r1c3-right").click(function() {
    $(".three").fadeOut();
    $(".four").fadeIn();
  })
  $("button#r1c3-left").click(function() {
    $(".three").fadeOut();
    $(".two").fadeIn();
  })
  $("button#r1c3-down").click(function() {
    $(".three").fadeOut();
    $(".nine").fadeIn();
  })
  $("button#r1c4-right").click(function() {
    $(".four").fadeOut();
    $(".five").fadeIn();
  })
  $("button#r1c4-left").click(function() {
    $(".four").fadeOut();
    $(".three").fadeIn();
  })
  $("button#r1c4-down").click(function() {
    $(".four").fadeOut();
    $(".ten").fadeIn();
  })
  $("button#r1c5-right").click(function() {
    $(".five").fadeOut();
    $(".six").fadeIn();
  })
  $("button#r1c5-left").click(function() {
    $(".five").fadeOut();
    $(".four").fadeIn();
  })
  $("button#r1c5-down").click(function() {
    $(".five").fadeOut();
    $(".eleven").fadeIn();
  })
  $("button#r1c6-left").click(function() {
    $(".six").fadeOut();
    $(".five").fadeIn();
  })
  $("button#r1c6-down").click(function() {
    $(".six").fadeOut();
    $(".twelve").fadeIn();
  })
  $("button#r2c1-right").click(function() {
    $(".seven").fadeOut();
    $(".eight").fadeIn();
  })
  $("button#r2c1-up").click(function() {
    $(".seven").fadeOut();
    $(".one").fadeIn();
  })
  $("button#r2c1-down").click(function() {
    $(".seven").fadeOut();
    $(".thirteen").fadeIn();
  })
  $("button#r2c2-right").click(function() {
    $(".eight").fadeOut();
    $(".nine").fadeIn();
  })
  $("button#r2c2-left").click(function() {
    $(".eight").fadeOut();
    $(".seven").fadeIn();
  })
  $("button#r2c2-up").click(function() {
    $(".eight").fadeOut();
    $(".two").fadeIn();
  })
  $("button#r2c2-down").click(function() {
    $(".eight").fadeOut();
    $(".fourteen").fadeIn();
  })
  $("button#r2c3-right").click(function() {
    $(".nine").fadeOut();
    $(".ten").fadeIn();
  })
  $("button#r2c3-left").click(function() {
    $(".nine").fadeOut();
    $(".eight").fadeIn();
  })
  $("button#r2c3-up").click(function() {
    $(".nine").fadeOut();
    $(".three").fadeIn();
  })
  $("button#r2c3-down").click(function() {
    $(".nine").fadeOut();
    $(".fifteen").fadeIn();
  })
  $("button#r2c4-right").click(function() {
    $(".ten").fadeOut();
    $(".eleven").fadeIn();
  })
  $("button#r2c4-left").click(function() {
    $(".ten").fadeOut();
    $(".nine").fadeIn();
  })
  $("button#r2c4-up").click(function() {
    $(".ten").fadeOut();
    $(".four").fadeIn();
  })
  $("button#r2c4-down").click(function() {
    $(".ten").fadeOut();
    $(".sixteen").fadeIn();
  })
  $("button#r2c5-right").click(function() {
    $(".eleven").fadeOut();
    $(".twelve").fadeIn();
  })
  $("button#r2c5-left").click(function() {
    $(".eleven").fadeOut();
    $(".ten").fadeIn();
  })
  $("button#r2c5-up").click(function() {
    $(".eleven").fadeOut();
    $(".five").fadeIn();
  })
  $("button#r2c5-down").click(function() {
    $(".twelve").fadeOut();
    $(".seventeen").fadeIn();
  })
  $("button#r2c6-left").click(function() {
    $(".twelve").fadeOut();
    $(".eleven").fadeIn();
  })
  $("button#r2c6-up").click(function() {
    $(".twelve").fadeOut();
    $(".six").fadeIn();
  })
  $("button#r2c6-down").click(function() {
    $(".twelve").fadeOut();
    $(".eighteen").fadeIn();
  })
  $("button#r3c1-right").click(function() {
    $(".thirteen").fadeOut();
    $(".fourteen").fadeIn();
  })
  $("button#r3c1-up").click(function() {
    $(".thirteen").fadeOut();
    $(".seven").fadeIn();
  })
  $("button#r3c1-down").click(function() {
    $(".thirteen").fadeOut();
    $(".nineteen").fadeIn();
  })
  $("button#r3c2-right").click(function() {
    $(".fourteen").fadeOut();
    $(".fifteen").fadeIn();
  })
  $("button#r3c2-left").click(function() {
    $(".fourteen").fadeOut();
    $(".thirteen").fadeIn();
  })
  $("button#r3c2-up").click(function() {
    $(".fourteen").fadeOut();
    $(".eight").fadeIn();
  })
  $("button#r3c2-down").click(function() {
    $(".fourteen").fadeOut();
    $(".twenty").fadeIn();
  })
  $("button#r3c3-right").click(function() {
    $(".fifteen").fadeOut();
    $(".sixteen").fadeIn();
  })
  $("button#r3c3-left").click(function() {
    $(".fifteen").fadeOut();
    $(".fourteen").fadeIn();
  })
  $("button#r3c3-up").click(function() {
    $(".fifteen").fadeOut();
    $(".nine").fadeIn();
  })
  $("button#r3c3-down").click(function() {
    $(".fifteen").fadeOut();
    $(".twenty-one").fadeIn();
  })
  $("button#r3c4-right").click(function() {
    $(".sixteen").fadeOut();
    $(".seventeen").fadeIn();
  })
  $("button#r3c4-left").click(function() {
    $(".sixteen").fadeOut();
    $(".fifteen").fadeIn();
  })
  $("button#r3c4-up").click(function() {
    $(".sixteen").fadeOut();
    $(".ten").fadeIn();
  })
  $("button#r3c4-down").click(function() {
    $(".sixteen").fadeOut();
    $(".twenty-two").fadeIn();
  })
  $("button#r3c5-right").click(function() {
    $(".seventeen").fadeOut();
    $(".eighteen").fadeIn();
  })
  $("button#r3c5-left").click(function() {
    $(".seventeen").fadeOut();
    $(".sixteen").fadeIn();
  })
  $("button#r3c5-up").click(function() {
    $(".seventeen").fadeOut();
    $(".eleven").fadeIn();
  })
  $("button#r3c5-down").click(function() {
    $(".seventeen").fadeOut();
    $(".twenty-three").fadeIn();
  })
  $("button#r3c5-down").click(function() {
    $(".eighteen").fadeOut();
    $(".twenty-three").fadeIn();
  })
  $("button#r3c6-left").click(function() {
    $(".eighteen").fadeOut();
    $(".seventeen").fadeIn();
  })
  $("button#r3c6-up").click(function() {
    $(".eighteen").fadeOut();
    $(".twelve").fadeIn();
  })
  $("button#r3c6-down").click(function() {
    $(".eighteen").fadeOut();
    $(".twenty-four").fadeIn();
  })
  $("button#r4c1-right").click(function() {
    $(".nineteen").fadeOut();
    $(".twenty").fadeIn();
  })
  $("button#r4c1-up").click(function() {
    $(".nineteen").fadeOut();
    $(".thirteen").fadeIn();
  })
  $("button#r4c1-down").click(function() {
    $(".nineteen").fadeOut();
    $(".twenty-five").fadeIn();
  })
  $("button#r4c2-right").click(function() {
    $(".twenty").fadeOut();
    $(".twenty-one").fadeIn();
  })
  $("button#r4c2-left").click(function() {
    $(".twenty").fadeOut();
    $(".nineteen").fadeIn();
  })
  $("button#r4c2-up").click(function() {
    $(".twenty").fadeOut();
    $(".fourteen").fadeIn();
  })
  $("button#r4c2-down").click(function() {
    $(".twenty").fadeOut();
    $(".twenty-six").fadeIn();
  })
  $("button#r4c3-right").click(function() {
    $(".twenty-one").fadeOut();
    $(".twenty-two").fadeIn();
  })
  $("button#r4c3-left").click(function() {
    $(".twenty-one").fadeOut();
    $(".twenty").fadeIn();
  })
  $("button#r4c3-up").click(function() {
    $(".twenty-one").fadeOut();
    $(".fifteen").fadeIn();
  })
  $("button#r4c3-down").click(function() {
    $(".twenty-one").fadeOut();
    $(".twenty-seven").fadeIn();
  })
  $("button#r4c4-right").click(function() {
    $(".twenty-two").fadeOut();
    $(".twenty-three").fadeIn();
  })
  $("button#r4c4-left").click(function() {
    $(".twenty-two").fadeOut();
    $(".twenty-one").fadeIn();
  })
  $("button#r4c4-up").click(function() {
    $(".twenty-two").fadeOut();
    $(".sixteen").fadeIn();
  })
  $("button#r4c4-down").click(function() {
    $(".twenty-two").fadeOut();
    $(".twenty-eight").fadeIn();
  })
  $("button#r4c5-right").click(function() {
    $(".twenty-three").fadeOut();
    $(".twenty-four").fadeIn();
  })
  $("button#r4c5-left").click(function() {
    $(".twenty-three").fadeOut();
    $(".twenty-two").fadeIn();
  })
  $("button#r4c5-up").click(function() {
    $(".twenty-three").fadeOut();
    $(".seventeen").fadeIn();
  })
  $("button#r4c5-down").click(function() {
    $(".twenty-three").fadeOut();
    $(".twenty-nine").fadeIn();
  })
  $("button#r4c6-left").click(function() {
    $(".twenty-four").fadeOut();
    $(".twenty-three").fadeIn();
  })
  $("button#r4c6-up").click(function() {
    $(".twenty-four").fadeOut();
    $(".eighteen").fadeIn();
  })
  $("button#r4c6-down").click(function() {
    $(".twenty-four").fadeOut();
    $(".thirty").fadeIn();
  })
  $("button#r5c1-right").click(function() {
    $(".twenty-five").fadeOut();
    $(".twenty-six").fadeIn();
  })
  $("button#r5c1-up").click(function() {
    $(".twenty-five").fadeOut();
    $(".nineteen").fadeIn();
  })
  $("button#r5c1-down").click(function() {
    $(".twenty-five").fadeOut();
    $(".thirty-one").fadeIn();
  })
  $("button#r5c2-right").click(function() {
    $(".twenty-six").fadeOut();
    $(".twenty-seven").fadeIn();
  })
  $("button#r5c2-left").click(function() {
    $(".twenty-six").fadeOut();
    $(".twenty-five").fadeIn();
  })
  $("button#r5c2-up").click(function() {
    $(".twenty-six").fadeOut();
    $(".twenty").fadeIn();
  })
  $("button#r5c2-down").click(function() {
    $(".twenty-six").fadeOut();
    $(".thirty-two").fadeIn();
  })
  $("button#r5c3-right").click(function() {
    $(".twenty-seven").fadeOut();
    $(".twenty-eight").fadeIn();
  })
  $("button#r5c3-left").click(function() {
    $(".twenty-seven").fadeOut();
    $(".twenty-six").fadeIn();
  })
  $("button#r5c3-up").click(function() {
    $(".twenty-seven").fadeOut();
    $(".twenty-one").fadeIn();
  })
  $("button#r5c3-down").click(function() {
    $(".twenty-seven").fadeOut();
    $(".thirty-three").fadeIn();
  })
  $("button#r5c4-right").click(function() {
    $(".twenty-eight").fadeOut();
    $(".twenty-nine").fadeIn();
  })
  $("button#r5c4-left").click(function() {
    $(".twenty-eight").fadeOut();
    $(".twenty-seven").fadeIn();
  })
  $("button#r5c4-up").click(function() {
    $(".twenty-eight").fadeOut();
    $(".twenty-two").fadeIn();
  })
  $("button#r5c4-down").click(function() {
    $(".twenty-eight").fadeOut();
    $(".thirty-four").fadeIn();
  })
  $("button#r5c5-right").click(function() {
    $(".twenty-nine").fadeOut();
    $(".thirty").fadeIn();
  })
  $("button#r5c5-left").click(function() {
    $(".twenty-nine").fadeOut();
    $(".twenty-eight").fadeIn();
  })
  $("button#r5c5-up").click(function() {
    $(".twenty-nine").fadeOut();
    $(".twenty-three").fadeIn();
  })
  $("button#r5c5-down").click(function() {
    $(".twenty-nine").fadeOut();
    $(".thirty-five").fadeIn();
  })
  $("button#r5c6-left").click(function() {
    $(".thirty").fadeOut();
    $(".twenty-nine").fadeIn();
  })
  $("button#r5c6-up").click(function() {
    $(".thirty").fadeOut();
    $(".twenty-four").fadeIn();
  })
  $("button#r5c6-down").click(function() {
    $(".thirty").fadeOut();
    $(".thirty-six").fadeIn();
  })
  $("button#r6c1-right").click(function() {
    $(".thirty-one").fadeOut();
    $(".thirty-two").fadeIn();
  })
  $("button#r6c1-up").click(function() {
    $(".thirty-one").fadeOut();
    $(".twenty-five").fadeIn();
  })
  $("button#r6c2-right").click(function() {
    $(".thirty-two").fadeOut();
    $(".thirty-three").fadeIn();
  })
  $("button#r6c2-left").click(function() {
    $(".thirty-two").fadeOut();
    $(".thirty-one").fadeIn();
  })
  $("button#r6c2-up").click(function() {
    $(".thirty-two").fadeOut();
    $(".twenty-six").fadeIn();
  })
  $("button#r6c3-right").click(function() {
    $(".thirty-three").fadeOut();
    $(".thirty-four").fadeIn();
  })
  $("button#r6c3-left").click(function() {
    $(".thirty-three").fadeOut();
    $(".thirty-two").fadeIn();
  })
  $("button#r6c3-up").click(function() {
    $(".thirty-three").fadeOut();
    $(".twenty-seven").fadeIn();
  })
  $("button#r6c4-right").click(function() {
    $(".thirty-four").fadeOut();
    $(".thirty-five").fadeIn();
  })
  $("button#r6c4-left").click(function() {
    $(".thirty-four").fadeOut();
    $(".thirty-three").fadeIn();
  })
  $("button#r6c4-up").click(function() {
    $(".thirty-four").fadeOut();
    $(".twenty-eight").fadeIn();
  })
  $("button#r6c5-right").click(function() {
    $(".thirty-five").fadeOut();
    $(".thirty-six").fadeIn();
  })
  $("button#r6c5-left").click(function() {
    $(".thirty-five").fadeOut();
    $(".thirty-four").fadeIn();
    $(".win").show();
  })
  $("button#r6c5-up").click(function() {
    $(".thirty-five").fadeOut();
    $(".twenty-nine").fadeIn();
  })
  $("button#r6c6-left").click(function() {
    $(".thirty-six").fadeOut();
    $(".thirty-five").fadeIn();
  })
  $("button#r6c6-up").click(function() {
    $(".thirty-six").fadeOut();
    $(".thirty").fadeIn();
  })

})  // <<<==This is the parentheses and curly bracket for the doc ready function!!
