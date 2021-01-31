// JS object that has 2 keys conditions and actions
var pageConditions = {
    conditions: [ // if these conditions are true perform the following actions
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { schemes: ['https','http'] }
      })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }
  
  chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([pageConditions]);
    });
  });