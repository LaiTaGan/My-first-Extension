//This Js file for manifest
//Background.Js的建立是用于针对某网页做出一些logic instruction
chrome.runtime.onInstalled.addListener(function() {
 //(onInstalled)在首次安装扩展程序，将扩展程序更新为新版本以及将Chrome更新为新版本时触发。
    chrome.storage.sync.set({color: '#3aa757'}, function() {
     //User data can be automatically synced with Chrome sync (using storage.sync).
      console.log("The color is green.");
    });

 //Use the chrome.declarativeContent API to take actions depending on the content of a page, without requiring permission to read the page's content.
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      //PageStateMatcher is used for active extension (or ShowPageAction) when the specified Url have load
      conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'
            }}),
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'www.youtube.com'
            }})
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]//PageAction have active from the file Json
    }]);
  });
});

