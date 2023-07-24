const socialMediaList = [
  "www.youtube.com",
  "www.tiktok.com",
  "www.facebook.com",
  "twitter.com",
  "www.instagram.com",
  "www.twitch.tv",
  "blast.tv",
  "www.reddit.com",
];

const choices = [
  "piped.video",
  "proxitok.pabloferreiro.es",
  chrome.runtime.getURL("blocked.html"),
  "nitter.net",
  chrome.runtime.getURL("blocked.html"),
  chrome.runtime.getURL("blocked.html"),
  "piped.video/channel/UC9k--dE_UE0Faxzgb_DDkYQ",
  "teddit.net",
];

if (socialMediaList.includes(window.location.hostname)) {
  const i = socialMediaList.indexOf(window.location.hostname);
  const url = window.location.toString();
  let newUrl = "";
  if (choices[i] === chrome.runtime.getURL("blocked.html")) {
    newUrl = chrome.runtime.getURL("blocked.html");
  } else {
    newUrl = url.replace(socialMediaList[i], choices[i]);
  }
  window.location.assign(newUrl);
}

if (choices.includes(window.location.hostname)) {
  chrome.storage.local.get(["block"]).then((result) => {
    resultBoolean = result.block;
    if (resultBoolean) {
      window.location.assign(chrome.runtime.getURL("break.html"));
    }
  });
}
