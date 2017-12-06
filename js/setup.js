'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');

  setupOpen.addEventListener('click', window.popup.openPopup);

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, window.popup.openPopup);
  });

  window.fillFragment(window.mage.createMages());
}());
