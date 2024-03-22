const button = document.getElementById("button");
const h1 = document.querySelector("h1");

const renderElements = (boolean) => {
  if (boolean === true) {
    document.body.style.backgroundColor = "#933";
    h1.textContent = "Optional sites are currently blocked!";
    button.innerHTML = "Use optional sites!";
  } else {
    document.body.style.backgroundColor = "#363";
    h1.textContent = `Optional sites are currently allowed!`;
    button.innerHTML = "Block optional sites!";
  }
};

chrome.storage.local.get(["block"]).then((result) => {
  const resultBoolean = result.block;
  renderElements(resultBoolean);
});

button.addEventListener("click", () => {
  chrome.storage.local.get(["block"]).then((result) => {
    const resultBoolean = result.block;
    let setBoolean = resultBoolean === true ? false : true;
    chrome.storage.local.set({ block: setBoolean });
    renderElements(setBoolean);
    const date = Date.now();
    chrome.storage.local.set({ somesAllowed: date });
  });
});
