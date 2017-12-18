'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var artifactsElement = document.querySelector('.setup-artifacts');
  var setupArtifactsCell = document.querySelector('.setup-artifacts .setup-artifacts-cell');
  var loadPath = 'https://1510.dump.academy/code-and-magick';

  setupOpen.addEventListener('click', window.popup.openPopup);

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, window.popup.openPopup);
  });

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = createShopElement();
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  shopElement.addEventListener('dragend', function () {
    artifactsElement.style.outline = 'none';
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    if (!setupArtifactsCell.contains(draggedItem)) {
      evt.target.appendChild(draggedItem);
      evt.preventDefault();
      artifactsElement.style.outline = 'none';
    } else {
      return;
    }
  });

  artifactsElement.addEventListener('dragstart', function () {
    artifactsElement.style.outline = '2px dashed red';
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

  function createShopElement() {
    var shopInnerElement = setup.querySelector('.setup-artifacts-shop .setup-artifacts-cell img');
    var shopArtifact = shopInnerElement.cloneNode(true);
    return shopArtifact;
  }

  function saveLoad() {
    window.popup.openPopup();

    function successHandler(wizards) {
      window.fillFragment(wizards);
    }

    function errorHandler(errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }

    window.backend.load(loadPath, successHandler, errorHandler);

    var form = setup.querySelector('.setup-wizard-form');
    form.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(form), function () {
        setup.classList.add('hidden');
      }, errorHandler);
      evt.preventDefault();
    });
  }

  saveLoad();
}());
