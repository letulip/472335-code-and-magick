'use strict';

window.renderStatistics = function (ctx, names, times) {
  var windowWidth = 420;
  var windowHeight = 270;
  var windowSlideX = 100;
  var windowSlideY = 10;
  var cloudColor = 'white';
  var cloudShade = 'rgba(0, 0, 0, 0.7)';
  var textColor = 'black';
  var playerColor = 'rgba(255, 0, 0, 1)';
  var fontProperties = '16px PT Mono';
  var max = -1;
  var maxResult = [];
  var histogramHeight = 150;
  var barWidth = 40;
  var indent = 90;
  var initialX = 120;
  var initialY = 250;
  var lineHeight = 15;

  function renderCloud(color, posX, posY, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, width, height);
  }

  function renderText(color, font, text, posX, posY) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, posX, posY);
  }

  function renderChart(color, posX, posY, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, width, height);
  }

  function getChartRandomOpacity() {
    return 'rgba(0, 0, 255, ' + Math.random() + ')';
  }

  function getTimesArray() {
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      maxResult.push(Math.floor(time));
      if (time > max) {
        max = time;
      }
    }
  }

  function renderCommonStatChart() {
    var step = histogramHeight / (max - 0);
    for (var j = 0; j < times.length; j++) {
      renderText(textColor, fontProperties, names[j], initialX + indent * j, initialY + lineHeight);
      renderText(textColor, fontProperties, maxResult[j], initialX + indent * j, initialY - histogramHeight - lineHeight);
      var chartColor = getChartRandomOpacity();
      if (names[j] === 'Вы') {
        chartColor = playerColor;
      }
      debugger;
      renderChart(chartColor, initialX + indent * j, initialY, barWidth, -times[j] * step);
    }
  }

  renderCloud(cloudShade, windowSlideX + 10, windowSlideY + 10, windowWidth, windowHeight);
  renderCloud(cloudColor, windowSlideX, windowSlideY, windowWidth, windowHeight);
  renderText(textColor, fontProperties, 'Ура вы победили!', windowSlideX + 20, windowSlideY + 30);
  renderText(textColor, fontProperties, 'Список результатов:', windowSlideX + 20, windowSlideY + 50);
  getTimesArray();
  renderCommonStatChart();
};
