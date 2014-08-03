'use strict';

(function() {
  var app = angular.module('phpwatchApp');

  app.controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isPage = function(loc) {
      return $location.path() == loc;
    };
  }]);
})();
