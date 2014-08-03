'use strict';

(function() {
  var app = angular.module('phpwatchApp');

  app.controller('MonitorsCtrl', ['$scope', function ($scope) {
    $scope.$parent.pageName = 'Monitors';

    $scope.monitors = [
      { 
        id: 123,
        endpoint: 'google.com:80',
        contacts: [ { id: 1, name: 'Bob' }, { id: 5, name: 'Joe' } ],
        lastquery: '1288323623006',
        uptime: {
          day: '100',
          week: '80',
          all: '50'
        }
      },
      {
        id: 456,
        endpoint: 'rosenfeld.io:22',
        contacts: [ {id: 2, name: 'Aaron' } ],
        lastquery: '1288323693005',
        uptime: {
          day: '70',
          week: '50',
          all: '20'
        }
      },
    ];
  }]);
})();
