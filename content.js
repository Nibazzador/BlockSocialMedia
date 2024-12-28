const breakBefore = [
  "areena.yle.fi",
  "www.twitch.tv",
  "www.youtube.com",
  "yle.fi",
  "web.snapchat.com",
  "web.whatsapp.com",
];

const breakAndConfirmation = [
  "www.tiktok.com",
  "www.last.fm",
  "twitter.com",
  "x.com",
  "www.facebook.com",
  "www.iltalehti.fi",
  "www.is.fi",
  "fi-fi.facebook.com",
  "www.instagram.com",
  "www.reddit.com",
  "www.last.fm",
  "www.hltv.org",
];

const blockedAlways = [
  "driftmas.slowroads.io",
  "www.gamesgames.com",
  "www.y8.com",
  "www.pomu.com",
  "www.1001pelit.com",
  "play2048.co",
  "www.vsco.co",
  "blast.tv",
  "slowroads.io",
  "www.bubbleshooter.com",
];

if (22 > new Date().getHours() && new Date().getHours() > 4) {
  chrome.storage.local.get(["URL"]).then((result) => {
    const oldURL = result.URL.split("//")[1].split("/")[0];
    const newURL = window.location.hostname;
    if (oldURL !== newURL) {
      ba();
    }
  });
} else {
  window.location.assign(chrome.runtime.getURL("sleep.html"));
}

const URL = window.location.href;
chrome.storage.local.set({ URL: URL });

function bb() {
  if (breakBefore.includes(window.location.hostname)) {
    window.location.assign(chrome.runtime.getURL("break.html"));
  }
}

function bac() {
  if (breakAndConfirmation.includes(window.location.hostname)) {
    window.location.assign(chrome.runtime.getURL("breakAndConfirmation.html"));
  } else {
    bb();
  }
}
function ba() {
  if (blockedAlways.includes(window.location.hostname)) {
    // If site url is in blockedAlways list:
    window.location.assign(chrome.runtime.getURL("blockedAlways.html")); // Redirect to blockedAlways site
  } else {
    bac();
  }
}
