'use strict';

window.saveLoad = function () {
  var setup = document.querySelector('.setup');
  var loadPath = 'https://1510.dump.academy/code-and-magick';
  var wizards = [];

  var setupWizard = document.querySelector('.setup-wizard-wrap');
  var coatColorChange = setupWizard.querySelector('.wizard-coat');
  var eyesColorChange = setupWizard.querySelector('.wizard-eyes');
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var coat = document.querySelector('#wizard-coat');
  var eyes = document.querySelector('#wizard-eyes');

  coatColorChange.addEventListener('click', function () {
    window.colorize(coat, window.mage.getRandomColor(coatColors), window.mage.changeColor);
  });

  eyesColorChange.addEventListener('click', function () {
    window.colorize(eyes, window.mage.getRandomColor(eyesColors), window.mage.changeColor);
  });

  function successHandler(data) {
    wizards = data;
    window.fillFragment(wizards);
  }

  function errorHandler(errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }

  window.backend.load(loadPath, successHandler, errorHandler);

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });
};
