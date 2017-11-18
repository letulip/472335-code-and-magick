'use strict';

window.renderStatistics = function (ctx, names, times) {
  // ctx.fillText('Hullo, canvas!');
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxResult = [];
  var maxIndex;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    maxResult.push(Math.floor(time));
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  // var histogramWidth = 150;
  // var step = histogramWidth / (max - 0);
  // var barHeigth = 20;
  // var indent = 40;
  // var initialX = 120;
  // var initialY = 80;
  // var lineHeight = 15;

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 250;
  var lineHeight = 15;

  for (var j = 0; j < times.length; j++) {
    ctx.fillText(names[j], initialX + indent * j, initialY + lineHeight);
    ctx.fillRect(initialX + indent * j, initialY, barWidth, -times[j] * step);
    ctx.fillText(maxResult[j], initialX + indent * j, initialY - histogramHeight - lineHeight);
  }
};
