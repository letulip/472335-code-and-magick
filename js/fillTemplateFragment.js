'use strict';

window.fillFragment = function (mages) {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');
  for (var i = 0; i < mages.length; i++) {
    fragment.appendChild(window.mage.createMageElement(mages[i]));
  }
  similarListElement.appendChild(fragment);
};
