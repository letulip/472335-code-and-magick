'use strict';

window.renderStatistics = function (ctx, names, times) {
  var windowWidth = 420;
  var windowHeight = 270;
  var windowSlideX = 100;
  var windowSlideY = 10;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(windowSlideX + 10, windowSlideY + 10, windowWidth, windowHeight);
  ctx.fillStyle = 'white';
  ctx.fillRect(windowSlideX, windowSlideY, windowWidth, windowHeight);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', windowSlideX + 20, windowSlideY + 30);
  ctx.fillText('Список результатов:', windowSlideX + 20, windowSlideY + 50);

  var max = -1;
  var maxResult = [];

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    maxResult.push(Math.floor(time));
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 90;
  var initialX = 120;
  var initialY = 250;
  var lineHeight = 15;

  for (var j = 0; j < times.length; j++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[j], initialX + indent * j, initialY + lineHeight);
    ctx.fillText(maxResult[j], initialX + indent * j, initialY - histogramHeight - lineHeight);
    var fillColor = 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillStyle = fillColor;
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(initialX + indent * j, initialY, barWidth, -times[j] * step);
  }
};
