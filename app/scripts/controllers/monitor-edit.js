'use strict';

(function() {
  var app = angular.module('phpwatchApp');

  app.controller('MonitorEditCtrl', ['$scope', function ($scope) {
    $scope.isEditing = false;

    $scope.showEditor = function(editor) {
      $scope.isEditing = true;
      $scope.editor = 'views/monitors/' + editor + '.html';
    };

    $scope.hideEditor = function() {
      $scope.isEditing = false;
    };
  }]);
})();
