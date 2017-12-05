'use strict';

window.fillTemplateFragment = (function () {
  return {
    fillFragment(mages) {
      var fragment = document.createDocumentFragment();
      var similarListElement = document.querySelector('.setup-similar-list');
      for (var i = 0; i < mages.length; i++) {
        fragment.appendChild(window.createMage.createMageElement(mages[i]));
      }
      similarListElement.appendChild(fragment);
    }
  };
})();
