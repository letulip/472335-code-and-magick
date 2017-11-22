'use strict';

var userDialog = document.querySelector('.setup');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

function Mage(name, coatColor, eyesColor) {
  this.name = name;
  this.coatColor = coatColor;
  this.eyesColor = eyesColor;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomName() {
  return names[getRandomInt(0, names.length)] + ' ' + lastnames[getRandomInt(0, lastnames.length)];
}

function getRandomColor(colors) {
  return colors[getRandomInt(0, colors.length)];
}

function createMages() {
  var mages = [];
  for (var i = 0; i < 4; i++) {
    mages.push(new Mage(getRandomName(), getRandomColor(coatColors), getRandomColor(eyesColors)));
  }
  return mages;
}

function createMageElement(mage) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = mage.name;
  wizardElement.querySelector('.wizard-coat').style.fill = mage.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = mage.eyesColor;
  return wizardElement;
}

function fillFragment(mages) {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');
  for (var i = 0; i < mages.length; i++) {
    fragment.appendChild(createMageElement(mages[i]));
  }
  similarListElement.appendChild(fragment);
}

userDialog.classList.remove('hidden');
fillFragment(createMages());
document.querySelector('.setup-similar').classList.remove('hidden');
