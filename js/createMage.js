'use strict';

window.createMage = (function () {
  return {
    createMageElement: function (mage) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = mage.name;
      wizardElement.querySelector('.wizard-coat').style.fill = mage.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = mage.eyesColor;
      return wizardElement;
    }
  };
})();
