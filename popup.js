let starttime = 0;
let stoptime = 0;
let totaltime = 0;
let state = "Stopped";

let btn = document.getElementById("btn");
let reset = document.getElementById("reset");

btn.addEventListener("click", function () {
  if (state == "Stopped") {
    starttime = Date.now();
    state = "Running";
    btn.innerHTML = "Stop";
  } else {
    stoptime = Date.now();
    state = "Stopped";
    btn.innerHTML = "Start";
    totaltime = stoptime - starttime;
  }
  document.getElementById("status").innerHTML = state;
});

reset.addEventListener("click", function () {
  totaltime = 0;
  starttime = 0;
  stoptime = 0;
  state = "Stopped";
  btn.innerHTML = "Start";
  document.getElementById("time").innerHTML = "00:00:00:00";
  document.getElementById("status").innerHTML = "Stopped";
});

setInterval(function () {
  if (state == "Running") {
    totaltime = Date.now() - starttime;
  }
  let h = Math.floor(totaltime / 3600000);
  let m = Math.floor(totaltime / 60000) - h * 60;
  let s = Math.floor(totaltime / 1000) - m * 60 - h * 3600;
  let ms = Math.floor((totaltime % 1000) / 10);
  document.getElementById("time").innerHTML =
    (h || "00") + ":" + (m || "00") + ":" + (s || "00") + ":" + (ms || "00");
}, 100);
