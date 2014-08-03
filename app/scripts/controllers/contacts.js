'use strict';

(function() {
  var app = angular.module('phpwatchApp');

  app.controller('ContactsCtrl', ['$scope', function ($scope) {
    $scope.$parent.pageName = 'Contacts';
  }]);
})();
