'use strict';

// (function () {
//   var ESC_KEYCODE = 27;
//   var ENTER_KEYCODE = 13;
//
//   window.util = {
//     isEscEvent: function (evt, action) {
//       if (evt.keycode === ESC_KEYCODE) {
//         action();
//       }
//     },
//     isEscAndEvent: function (evt, condition, action) {
//       if (evt.keycode === ESC_KEYCODE && condition) {
//         action();
//       }
//     },
//     isEnterEvent: function (evt, action) {
//       if (evt.keycode === ENTER_KEYCODE) {
//         action();
//       }
//     }
//   };
// })();

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEscAndEvent: function (evt, condition, action) {
      if (evt.keycode === ESC_KEYCODE && condition) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();
