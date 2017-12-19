'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var artifactsElement = document.querySelector('.setup-artifacts');
  var setupArtifactsCell = document.querySelector('.setup-artifacts .setup-artifacts-cell');

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
}());
