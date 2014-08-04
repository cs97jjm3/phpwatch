'use strict';

(function() {
  var app = angular.module('phpwatchApp');

  app.controller('MonitorEditCtrl', ['$scope', function ($scope) {
    $scope.isEditing = false;
    $scope.monitorNew = {
      host: '',
      port: 80,
      alias: '',
      failThreshold: 1,
      downtimeStart: 0,
      downtimeDur: 0,
      status: 1
    };
    $scope.monitor = angular.copy($scope.monitorNew);
    $scope.showDowntime = false;

    $scope.statusChange = function() {
      if ($scope.monitor.status == 4) {
        $scope.showDowntime = true;
      } else {
        $scope.showDowntime = false;
      }
    };

    $scope.showEditor = function(editor) {
      $scope.isEditing = true;
      $scope.editor = 'views/monitors/' + editor + '.html';
    };

    $scope.hideEditor = function() {
      $scope.isEditing = false;
      $scope.monitor = angular.copy($scope.monitorNew);
      angular.forEach($scope.monitorForm, function(input){
        if(typeof(input.$dirty) !== "undefined"){
          input.$dirty = false;
          input.$pristine = true;
        }
      });
    };
  }]);
})();
