'use strict';

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'www.pathofexile.com'},
    })],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});
