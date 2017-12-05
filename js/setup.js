'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');
  var setupWizard = document.querySelector('.setup-wizard-wrap');
  var coatColorChange = setupWizard.querySelector('.wizard-coat');
  var eyesColorChange = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', function (evt) {
      var condition = (userNameInput !== document.activeElement);
      window.util.isEscAndEvent(evt, condition, closePopup);
    });

    setupClose.addEventListener('click', closePopup);

    setupClose.addEventListener('keydown', function (evt) {
      window.util.isEnterEvent(evt, closePopup);
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

    function closePopup() {
      setup.classList.add('hidden');
    }
  }

  setupOpen.addEventListener('click', openPopup);

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  window.fillTemplateFragment.fillFragment(window.mage.createMages());
}());
