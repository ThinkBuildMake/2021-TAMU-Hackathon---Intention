var start = document.querySelector('#start-intention');
var startBreak = document.querySelector('#stop-intention');

function timer(seconds) {
  var sec = seconds;
  var timer = setInterval(function() {
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

//When focus mode = 1 and if you switch to chrome, create an unremovable popup for 20 seconds
if (start == 1)
  while (1) {
    timer(20);
    if (startBreak == 1) {
      break;
    }
  }
