const socialMediaList = [
  "www.youtube.com",
  "www.tiktok.com",
  "www.facebook.com",
  "fi-fi.facebook.com",
  "twitter.com",
  "www.instagram.com",
  "www.twitch.tv",
  "www.reddit.com",
];

const choices = [
  "piped.video",
  "proxitok.pabloferreiro.es",
  "privacyBlocked",
  "privacyBlocked",
  "nitter.net",
  "privacyBlocked",
  "privacyBlocked",
  "privacyBlocked",
];

const blockedChoice = ["areena.yle.fi", "www.hltv.org", "blast.tv"];

const blockedAlways = [
  "www.gamesgames.com",
  "www.y8.com",
  "www.pomu.com",
  "www.1001pelit.com",
  "play2048.co",
  "www.vsco.co",
];

if (socialMediaList.includes(window.location.hostname)) {
  const i = socialMediaList.indexOf(window.location.hostname);
  const url = window.location.toString();
  let newUrl = "";
  if (choices[i] === "privacyBlocked") {
    newUrl = chrome.runtime.getURL("privacyBlocked.html");
  } else {
    newUrl = url.replace(socialMediaList[i], choices[i]);
  }
  window.location.assign(newUrl);
}

if (
  choices.includes(window.location.hostname) ||
  blockedChoice.includes(window.location.hostname)
) {
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
