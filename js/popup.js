'use strict';

window.popup = (function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var userNameInput = setup.querySelector('.setup-user-name');

  return {
    openPopup: function () {
      var setupX = document.body.clientWidth / 2;
      setup.style.top = '80px';
      setup.style.left = setupX + 'px';
      var setupClose = setup.querySelector('.setup-close');
      var setupWizard = document.querySelector('.setup-wizard-wrap');
      var coatColorChange = setupWizard.querySelector('.wizard-coat');
      var eyesColorChange = setupWizard.querySelector('.wizard-eyes');
      var setupFireball = document.querySelector('.setup-fireball-wrap');
      var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
      var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
      var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
      var coat = document.querySelector('#wizard-coat');
      var eyes = document.querySelector('#wizard-eyes');

      setup.classList.remove('hidden');
      setupSimilar.classList.remove('hidden');
      document.addEventListener('keydown', function (evt) {
        var condition = (userNameInput !== document.activeElement);
        window.util.isEscAndEvent(evt, condition, window.popup.closePopup);
      });

      setupClose.addEventListener('click', window.popup.closePopup);

      setupClose.addEventListener('keydown', function (evt) {
        window.util.isEnterEvent(evt, window.popup.closePopup);
      });

      coatColorChange.addEventListener('click', function () {
        window.colorize(coat, window.mage.getRandomColor(coatColors), window.mage.changeColor);
      });

      eyesColorChange.addEventListener('click', function () {
        window.colorize(eyes, window.mage.getRandomColor(eyesColors), window.mage.changeColor);
      });

      setupFireball.addEventListener('click', function () {
        window.colorize(setupFireball, window.mage.getRandomColor(fireballColors), window.mage.changeColorBackgorund);
      });
    },
    closePopup: function () {
      setup.classList.add('hidden');
    }
  };
})();
