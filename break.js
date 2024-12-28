var count = 5;
document.title = "5";
var counter = setInterval(timer, 1000);

function timer() {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    chrome.storage.local.get(["URL"]).then((result) => {
      const URL = result.URL;
      document.title = "Redirecting...";
      window.location.replace(URL);
      return;
    });
  }

  document.title = count;
  document.getElementsByClassName("timer")[0].innerHTML = count;
  document.getElementsByClassName("timer")[0].classList.add("animation5");
  document.getElementsByClassName("timer")[0].classList.remove("bad");
}
