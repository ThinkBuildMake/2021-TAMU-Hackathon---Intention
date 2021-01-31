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

function startFocusMode(){
  chrome.storage.local.set({ enabled: true });
}
start.onclick = startFocusMode

function stopFocusMode(){
  chrome.storage.local.set({ enabled: false });
}

startBreak.onclick = stopFocusMode
