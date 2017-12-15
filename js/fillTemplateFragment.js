'use strict';

window.fillFragment = function (mages) {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');
  var magesRange = window.util.getRandomInt(0, mages.length - 4);
  for (var i = magesRange; i < magesRange + 4; i++) {
    fragment.appendChild(renderWizard(mages[i]));
  }
  similarListElement.appendChild(fragment);

  function renderWizard(wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  }
};
