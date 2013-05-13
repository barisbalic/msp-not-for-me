function replaceMspWithCost(tabId, changeInfo, tab) {
  chrome.pageAction.show(tabId);
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(replaceMspWithCost);
