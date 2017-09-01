chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
    chrome.storage.sync.get('selected', function(data) {
        if(bookmark.parentId !== data.selected) return;
        chrome.tabs.create({ url: bookmark.url });
        chrome.bookmarks.remove(id,function() { });
    });
});
