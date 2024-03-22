const blockedChoice = [
  "areena.yle.fi",
  "www.hltv.org",
  "blast.tv",
  "www.twitch.tv",
  "www.youtube.com",
];

const blockedAlways = [
  "www.gamesgames.com",
  "www.y8.com",
  "www.pomu.com",
  "www.1001pelit.com",
  "play2048.co",
  "www.vsco.co",
  "www.tiktok.com",
  "www.facebook.com",
  "fi-fi.facebook.com",
  "twitter.com",
  "www.instagram.com",
  "www.reddit.com",
];

if (blockedChoice.includes(window.location.hostname)) {
  chrome.storage.local.get(["somesAllowed"]).then((somesAllowed) => {
    if ((Date.now() - somesAllowed.somesAllowed) / 3600000 > 1) {
      chrome.storage.local.set({ block: true });
    }
    chrome.storage.local.get(["block"]).then((result) => {
      resultBoolean = result.block;

      if (resultBoolean) {
        window.location.assign(chrome.runtime.getURL("break.html"));
      }
    });
  });
}

if (blockedAlways.includes(window.location.hostname)) {
  window.location.assign(chrome.runtime.getURL("blockedAlways.html"));
}
