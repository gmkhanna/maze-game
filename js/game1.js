// var ctx = document.getElementById("ctx").getContext("2d");
$(document).ready(function(){

var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var UP_KEY = 38;
var DOWN_KEY = 40;
var HERO_MOVEMENT = 5;

var lastLoopRun = 0;

var hero = new Object();
hero.element = 'hero';
hero.x = 250;
hero.y = 460;


var controller = new Object();

function toggleKey(keyCode, isPressed) {
  console.log(keyCode);
  if (keyCode == LEFT_KEY) {
    controller.left == isPressed;
  }
  if (keyCode == RIGHT_KEY) {
    controller.right == isPressed;
  }
  if (keyCode == UP_KEY) {
    controller.up == isPressed;
  }
  if (keyCode == DOWN_KEY) {
    controller.down == isPressed;
  }
}

function setPosition(sprite) {
  var e = document.getElementById(sprite.element);
  e.style.left = sprite.x + 'px';
  e.style.top = sprite.y + 'px';
}

function handleControls() {
  if (controller.left) {
    hero.x -= HERO_MOVEMENT;
  }
  if (controller.right) {
    hero.x += HERO_MOVEMENT;
  }
  if (controller.up) {
    hero.y -= HERO_MOVEMENT;
  }
  if (controller.down) {
    hero.y += HERO_MOVEMENT;
  }
}

function showSprites() {
  setPosition(hero);
}

function loop() {
  if (new Date().getTime() - lastLoopRun > 40) {
    handleControls();
    showSprites();

    lastLoopRun = new Date().getTime();
  }
  setTimeout('loop();', 2);
}


document.onkeydown = function(evt) {
  toggleKey(evt.keyCode, true);
};

document.onkeyup = function(evt) {
  toggleKey(evt.keyCode, false);
};


loop();

});
