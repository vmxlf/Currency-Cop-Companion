'use strict';

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'poe.game.daum.net'},
    })],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});
