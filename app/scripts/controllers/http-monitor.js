'use strict';

(function() {
  var app = angular.module('phpwatchApp');

  app.controller('HttpMonitorCtrl', ['$scope', function ($scope) {
    $scope.monitor.type = "http";
    $scope.httpMonitorNew = {
      timeout: 1,
      pattern: '',
      matchMethod: 1,
      mustContain: 1,
    };

    $scope.submitForm = function() {
      $scope.hideEditor();
    };

    $scope.hideEditor = function() {
      $scope.httpMonitor = angular.copy($scope.httpMonitorNew);
      $scope.$parent.hideEditor();
    };

    $scope.submitMonitor = function() {
    };
  }]);
})();
