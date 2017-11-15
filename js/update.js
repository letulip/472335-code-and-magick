'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

function getFireballSpeed(left) {
  if (left) {
    return 5;
  }
  return 2;
}

function getWizardHeight() {
  return (1.337 * wizardWidth);
}

function getWizardX(width) {
  return ((width - wizardWidth) / 2);
}

function getWizardY(height) {
  return (height * 0,67);
}
