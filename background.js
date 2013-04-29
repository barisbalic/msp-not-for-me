function replaceMspWithCost(tabId, changeInfo, tab) {
  // console.log('did something');
  if (tab.url.indexOf('marketplace.xbox.com') > -1) {
    console.log(tab);
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(replaceMspWithCost);
