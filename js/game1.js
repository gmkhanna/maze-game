
$(document).ready(function(){

  var ctx = document.getElementById("ctx").getContext("2d");

var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var UP_KEY = 38;
var DOWN_KEY = 40;



  var hero = new Object();
  hero.element = 'hero';
  hero.x = 250;
  hero.y = 710;


var controller = new Object();

  function toggleKey(keyCode, isPressed) {
    console.log(keyCode);
  }




  function setPosition(sprite) {
    var e = document.getElementById(sprite.element);
    e.style.left = sprite.x + 'px';
    e.style.top = sprite.y + 'px';
  }


document.onkeydown = function(event) {
  toggleKey(event.keyCode, true);
};

document.onkeyup = function(event) {
  toggleKey(event.keyCode, false);
};


  setPosition(hero);


})
