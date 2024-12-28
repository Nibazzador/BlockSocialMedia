var count = 10;
document.title = "10";
var counter = setInterval(timer, 1000);

const clock = document.getElementsByClassName("timer")[0];
const button = document.getElementsByClassName("button")[0];

function timer() {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    document.title = "Waiting...";
    button.classList.remove("hide");
    clock.classList.add("hide");
  }

  document.title = count;
  clock.innerHTML = count;
  clock.classList.add("animation10");
  clock.classList.remove("bad");
}

button.addEventListener("click", () => {
  chrome.storage.local.get(["URL"]).then((result) => {
    const URL = result.URL;
    document.title = "Redirecting...";
    window.location.replace(URL);
    return;
  });
});
