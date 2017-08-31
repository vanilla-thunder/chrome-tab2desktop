'use strict';

angular.module('app', []).controller('ctrl', function ($scope) {
    $scope.cfg = {
        'selected':'',
        'tree':[]
    };
    $scope.folder = "";
    chrome.bookmarks.getTree(function (results) {
        console.log(results[0].children);
        $scope.cfg.tree = results[0].children;
        $scope.$apply();
    });
});
