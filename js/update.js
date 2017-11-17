'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

function getFireballSpeed(left) {
  return left ? 5 : 2;
}

function getWizardHeight() {
  return (1.337 * wizardWidth);
}

function getWizardX(width) {
  if (width) {
    return ((width - wizardWidth) / 2);
  }
  return 'Need width';
}

function getWizardY(height) {
  if (height) {
    return (height * 2 / 3);
  }
  return 'Need height';
}
