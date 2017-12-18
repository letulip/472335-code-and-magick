'use strict';

window.popup = (function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var userNameInput = setup.querySelector('.setup-user-name');

  return {
    openPopup: function () {
      var setupX = document.body.clientWidth / 2;
      setup.style.top = '80px';
      setup.style.left = setupX + 'px';
      var setupClose = setup.querySelector('.setup-close');

      setup.classList.remove('hidden');
      setupSimilar.classList.remove('hidden');
      document.addEventListener('keydown', function (evt) {
        var condition = (userNameInput !== document.activeElement);
        window.util.isEscAndEvent(evt, condition, window.popup.closePopup);
      });

      setupClose.addEventListener('click', window.popup.closePopup);

      setupClose.addEventListener('keydown', function (evt) {
        window.util.isEnterEvent(evt, window.popup.closePopup);
      });
    },
    closePopup: function () {
      setup.classList.add('hidden');
    }
  };
})();
