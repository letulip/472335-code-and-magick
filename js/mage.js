'use strict';

window.mage = (function () {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  return {
    createMages: function () {
      var mages = [];
      for (var i = 0; i < 4; i++) {
        mages.push(new Mage(window.mage.getRandomName(), window.mage.getRandomColor(coatColors), window.mage.getRandomColor(eyesColors)));
      }

      function Mage(name, coatColor, eyesColor) {
        this.name = name;
        this.coatColor = coatColor;
        this.eyesColor = eyesColor;
      }
      return mages;
    },
    getRandomName: function () {
      return names[window.util.getRandomInt(0, names.length)] + ' ' + lastnames[window.util.getRandomInt(0, lastnames.length)];
    },
    getRandomColor: function (colors) {
      return colors[window.util.getRandomInt(0, colors.length)];
    },
    changeColor: function (target, colorsArray) {
      target.style.fill = window.mage.getRandomColor(colorsArray);
    }
  };
})();
