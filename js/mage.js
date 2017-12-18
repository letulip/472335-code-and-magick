'use strict';

(function () {
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var setupWizard = document.querySelector('.setup-wizard-wrap');
  var coatColorChange = setupWizard.querySelector('.wizard-coat');
  var eyesColorChange = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizard = {
    onEyesChange: function () {
    },
    onCoatChange: function () {}
  };

  setupFireball.addEventListener('click', function () {
    window.colorize(setupFireball, getRandomColor(FIREBALL_COLORS), changeColorBackgorund);
  });

  coatColorChange.addEventListener('click', function () {
    var newColor = getRandomColor(COAT_COLORS);
    window.colorize(coatColorChange, newColor, changeColor);
    wizard.onCoatChange(newColor);
  });

  eyesColorChange.addEventListener('click', function () {
    var newColor = getRandomColor(EYES_COLORS);
    window.colorize(eyesColorChange, newColor, changeColor);
    wizard.onEyesChange(newColor);
  });

  function getRandomColor(colors) {
    return colors[window.util.getRandomInt(0, colors.length)];
  }
  function changeColor(target, color) {
    target.style.fill = color;
  }
  function changeColorBackgorund(target, color) {
    target.style.background = color;
  }

  window.wizard = wizard;

  return wizard;
})();
