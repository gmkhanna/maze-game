
$(document).ready(function(){

  var ctx = document.getElementById("ctx").getContext("2d");

  var hero = new Object();
  hero.element = 'hero';
  hero.x = 250;
  hero.y = 710;

  function setPosition(sprite) {
    var e = document.getElementById(sprite.element);
    e.style.left = sprite.x + 'px';
    e.style.top = sprite.y + 'px';
  }

  setPosition(hero);
  

})
