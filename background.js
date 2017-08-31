chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("CLICKED! LOL!!");
    chrome.bookmarks.getTree(function(results){
        console.log(results);
    });
});

chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
    console.log("bookmark created!");
    console.log(id, bookmark);
});