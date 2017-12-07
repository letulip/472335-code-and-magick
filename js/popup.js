'use strict';

window.popup = (function () {
  var setup = document.querySelector('.setup');
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

      setup.classList.remove('hidden');
      document.addEventListener('keydown', function (evt) {
        var condition = (userNameInput !== document.activeElement);
        window.util.isEscAndEvent(evt, condition, window.popup.closePopup);
      });

      setupClose.addEventListener('click', window.popup.closePopup);

      setupClose.addEventListener('keydown', function (evt) {
        window.util.isEnterEvent(evt, window.popup.closePopup);
      });

      coatColorChange.addEventListener('click', function () {
        window.mage.changeColor(coatColorChange, window.mage.getCoatColors());
      });

      eyesColorChange.addEventListener('click', function () {
        window.mage.changeColor(eyesColorChange, window.mage.getEyesColors());
      });

      setupFireball.addEventListener('click', function () {
        setupFireball.style.backgroundColor = window.mage.getRandomColor(fireballColors);
      });
    },
    closePopup: function () {
      setup.classList.add('hidden');
    }
  };
})();
