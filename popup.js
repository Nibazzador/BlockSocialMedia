const button = document.getElementById("button");
const h1 = document.querySelector("h1");

const renderElements = (boolean) => {
  // True makes background red and says blocked, otherwise background is green
  if (boolean === true) {
    document.body.style.backgroundColor = "#933";
    h1.textContent = "Blocked";
    button.innerHTML = "Allow";
  } else {
    document.body.style.backgroundColor = "#363";
    h1.textContent = `Allowed`;
    button.innerHTML = "Block";
  }
};

chrome.storage.local.get(["somesAllowed"]).then((somesAllowed) => {
  // Gets info from chrome storage when user allowed optional sites last time
  if ((Date.now() - somesAllowed.somesAllowed) / 3600000 > 1) {
    // blocks optional sites if more than an hour has elapsed
    chrome.storage.local.set({ block: true });
  }
  chrome.storage.local.get(["block"]).then((result) => {
    // Gets info if sites are blocked
    const resultBoolean = result.block;
    renderElements(resultBoolean); // Updates sites appearance
  });
});

button.addEventListener("click", () => {
  // Eventlistener for the button
  chrome.storage.local.get(["block"]).then((result) => {
    // Gets info if sites were blocked before click
    const resultBoolean = result.block;
    let setBoolean = resultBoolean === true ? false : true; // Switches boolean true -> false and false -> true
    chrome.storage.local.set({ block: setBoolean });
    renderElements(setBoolean);
    const date = Date.now(); // Saves time when sites got allowed so sites can be blocked automatically after one hour
    chrome.storage.local.set({ somesAllowed: date });
  });
});
