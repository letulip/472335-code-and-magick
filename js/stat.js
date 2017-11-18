'use strict';

window.renderStatistics = function (ctx, names, times) {
  // ctx.fillText('Hullo, canvas!');
  ctx.fillStyle = 'gray';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);

  ctx.fillText('Худшее время: ' + max + 'мс у игрока ' + names[maxIndex], 120, 60);

  var barHeigth = 20;
  var indent = 40;
  var initialX = 120;
  var initialY = 80;
  var lineHeight = 15;

  for (var j = 0; j < times.length; j++) {
    ctx.fillRect(initialX, initialY + indent * j, times[j] * step, barHeigth);
    ctx.fillText(names[j], initialX + histogramWidth + barHeigth, initialY + lineHeight + indent * j);
  }
};
