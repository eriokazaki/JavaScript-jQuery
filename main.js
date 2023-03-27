'use strict';

const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let timeOutId;
let elapsedMs = 0;

// ボタン設定
function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
}
  
function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
}
  
function setButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
}

setButtonStateInitial(); //初期設定


function timeToString(millis) {
     const ms = millis % 1000;
     const s = Math.floor(millis / 1000) % 60;
     const m = Math.floor(millis / 1000 / 60) % 60;
     const h = Math.floor(millis / 1000 / 60 / 60) % 60;
     
     const formattedMs = ms.toString().padStart(3, '0');
     const formattedS = s.toString().padStart(2, '0');
     const formattedM = m.toString().padStart(2, '0');
     const formattedH = h.toString().padStart(2, '0');
     
     return `${formattedH}:${formattedM}:${formattedS}:${formattedMs}`;
};

// 開始した時
start.addEventListener('click', () => {
  setButtonStateRunning(); // Runningへ以降
  let startMs = Date.now(); //開始時間ミリ秒
  
  startMs -= elapsedMs;　//リスタート時、開始した時刻から保持していた時間を引くと、経過時間から始められる
  
  timeOutId = setInterval(() => {
     const nowMs = Date.now();
     elapsedMs = nowMs - startMs;
     
     timer.textContent = timeToString(elapsedMs);
  }, 10);
});

// ストップする時
stop.addEventListener('click', () => {
  setButtonStateStopped(); // Stoppedへ以降
  clearInterval(timeOutId);
});

// リセットする時
reset.addEventListener('click', () => {
    setButtonStateInitial(); // Initualへ以降
    clearInterval(timeOutId);
    elapsedMs = 0; //保持していた経過時間をリセット
    timer.textContent ='00:00:00:000';
});