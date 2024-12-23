const blockedChoice = [
  "areena.yle.fi",
  "www.hltv.org",
  "www.twitch.tv",
  "www.youtube.com",
  "yle.fi",
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
  "x.com",
  "blast.tv",
  "www.instagram.com",
  "www.reddit.com",
  "slowroads.io",
  "driftmas.slowroads.io",
  "www.bubbleshooter.com",
  "www.last.fm",
];

if (blockedChoice.includes(window.location.hostname)) {
  // If site url is in blockedChoise list:
  chrome.storage.local.get(["somesAllowed"]).then((somesAllowed) => {
    // Gets info from chrome storage when user allowed optional sites last time
    if ((Date.now() - somesAllowed.somesAllowed) / 3600000 > 1) {
      // blocks optional sites if more than an hour has elapsed
      chrome.storage.local.set({ block: true });
    }
    chrome.storage.local.get(["block"]).then((result) => {
      // Gets info from chrome storage if optional sites are allowed
      resultBoolean = result.block;

      if (resultBoolean) {
        // if true (sites blocked) -> redirect to break.html
        window.location.assign(chrome.runtime.getURL("break.html"));
      }
    });
  });
}

if (blockedAlways.includes(window.location.hostname)) {
  // If site url is in blockedAlways list:
  window.location.assign(chrome.runtime.getURL("blockedAlways.html")); // Redirect to blockedAlways site
}
