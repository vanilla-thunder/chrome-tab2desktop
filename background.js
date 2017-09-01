var watch = false;
chrome.bookmarks.onCreated.addListener(function(id, bookmark) 
{
    if(!this.watch) return;
    console.log("new bookmark");
    console.log(bookmark);
    chrome.storage.sync.get('selected', function(data) 
    {
        if(bookmark.parentId !== data.selected) return;
        chrome.tabs.create({ url: bookmark.url });
        chrome.bookmarks.remove(id,function() { });
    });
});
chrome.bookmarks.onImportBegan.addListener(function () 
{
    console.log("import began");
    this.watch = true;
});
chrome.bookmarks.onImportEnded.addListener(function () 
{
    console.log("import ended");
    this.watch = false;
});
