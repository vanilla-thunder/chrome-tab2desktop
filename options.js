'use strict';

angular.module('app', []).controller('ctrl', function ($scope) {
    $scope.cfg = {
        'selected':'',
        'tree':[]
    };
    $scope.folder = "";
    chrome.bookmarks.getTree(function (results) {
        $scope.cfg.tree = results[0].children;
        $scope.$apply();
    });
    chrome.storage.sync.get('selected', function(data) {
        $scope.cfg.selected = data.selected;
        $scope.$apply();
    });

    $scope.save = function() {
        chrome.storage.sync.set({'selected': $scope.cfg.selected}, function() { });
    };
});
