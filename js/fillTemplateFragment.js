'use strict';

window.fillFragment = function (mages) {
  var takeNumber = mages.length > 4 ? 4 : mages.length;
  var similarListElement = document.querySelector('.setup-similar-list');
  similarListElement.innerHTML = '';
  for (var i = 0; i < takeNumber; i++) {
    similarListElement.appendChild(renderWizard(mages[i]));
  }

  function renderWizard(wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').innerText = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  }
};
