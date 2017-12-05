'use strict';

window.popup = (function () {
  var setup = document.querySelector('.setup');

  return {
    openPopup() {
      var setupClose = setup.querySelector('.setup-close');
      var setupWizard = document.querySelector('.setup-wizard-wrap');
      var coatColorChange = setupWizard.querySelector('.wizard-coat');
      var eyesColorChange = setupWizard.querySelector('.wizard-eyes');
      var setupFireball = document.querySelector('.setup-fireball-wrap');
      var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

      setup.classList.remove('hidden');
      document.addEventListener('keydown', function (evt) {
        var userNameInput = window.formValidate.getUserNameInput();
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
    closePopup() {
      setup.classList.add('hidden');
    }
  };
})();
