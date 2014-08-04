'use strict';

(function() {
  var app = angular.module('phpwatchApp');

  app.controller('MonitorsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.$parent.pageName = 'Monitors';

    $scope.getRowClass = function(current) {
      if (current == 'up') return 'success';
      if (current == 'down') return 'danger';
      return 'active';
    };

    $scope.fetch = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: 'GET', url: 'test/monitors.json'}).
        success(function(data, status) {
          $scope.monitors = data;
        }).
        error(function(data, status) {
      });
    };

    $scope.fetch();
  }]);
})();
