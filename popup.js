//this file for html
let changeColor = document.getElementById("SetTwo");

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;//Import the color from the script file of Json
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     //chrome.tabs.query(object queryInfo, function callback)
      chrome.tabs.executeScript(
          //chrome.tabs.executeScript(integer tabId, object details, function callback)
          //Inject Programmatically
          //tabs[0].id returns an Array with "the result of the script" from each tab/frame in which the script is run.
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'
        });
        //Active this function by "activeTab" in json file
        //Action when user clicked button
    });
};

let changeColorOne = document.getElementById("SetThree");

chrome.storage.sync.get('color', function(data) {
  changeColorOne.style.backgroundColor = data.color;//Import the color from the script file of Json
  changeColorOne.setAttribute('value', data.color);
});
