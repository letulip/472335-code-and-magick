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
      window.mage.changeColor(coatColorChange, window.mage.coatColors);
    });

    eyesColorChange.addEventListener('click', function () {
      window.mage.changeColor(eyesColorChange, window.mage.eyesColors);
    });

    setupFireball.addEventListener('click', function () {
      setupFireball.style.backgroundColor = window.mage.getRandomColor(fireballColors);
    });

    function closePopup() {
      setup.classList.add('hidden');
    }
  }
  //
  // function createMages() {
  //   var mages = [];
  //   for (var i = 0; i < 4; i++) {
  //     mages.push(new Mage(getRandomName(), getRandomColor(coatColors), getRandomColor(eyesColors)));
  //   }
  //
  //   function Mage(name, coatColor, eyesColor) {
  //     this.name = name;
  //     this.coatColor = coatColor;
  //     this.eyesColor = eyesColor;
  //   }
  //
  //   function getRandomName() {
  //     return names[window.util.getRandomInt(0, names.length)] + ' ' + lastnames[window.util.getRandomInt(0, lastnames.length)];
  //   }
  //
  //   function getRandomColor(colors) {
  //     return colors[window.util.getRandomInt(0, colors.length)];
  //   }
  //
  //   function changeColor(target, colorsArray) {
  //     target.style.fill = getRandomColor(colorsArray);
  //   }
  //   return mages;
  // }

  function createMageElement(mage) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = mage.name;
    wizardElement.querySelector('.wizard-coat').style.fill = mage.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = mage.eyesColor;
    return wizardElement;
  }

  function fillFragment(mages) {
    var fragment = document.createDocumentFragment();
    var similarListElement = document.querySelector('.setup-similar-list');
    for (var i = 0; i < mages.length; i++) {
      fragment.appendChild(createMageElement(mages[i]));
    }
    similarListElement.appendChild(fragment);
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

  fillFragment(window.mage.createMages());
}());
