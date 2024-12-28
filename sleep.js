const clock = document.querySelector(".clock .time");

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  clock.innerHTML = "Clock is now: " + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    const stringI = "0" + i;
    return stringI;
  } else {
    return i;
  }
}
startTime();
