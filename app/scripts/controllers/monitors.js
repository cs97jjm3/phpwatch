'use strict';

(function() {
  var app = angular.module('phpwatchApp');

  app.controller('MonitorsCtrl', ['$scope', function ($scope) {
    $scope.$parent.pageName = 'Monitors';

    $scope.getRowClass = function(current) {
      if (current == 'up') return 'success';
      if (current == 'down') return 'danger';
      return 'active';
    };

    $scope.monitors = [
      { 
        id: 123,
        alias: 'Google HTTP',
        endpoint: 'google.com:80',
        contacts: [ { id: 1, name: 'Bob' }, { id: 5, name: 'Joe' } ],
        lastquery: '1288323623006',
        current: 'up',
        uptime: {
          day: { up: 100, down: 25 },
          week: { up: 200, down: 55 },
          all: { up: 300, down: 100 },
        }
      },
      {
        id: 456,
        endpoint: 'rosenfeld.io:80',
        contacts: [ {id: 2, name: 'Aaron' } ],
        lastquery: '1288323693005',
        current: 'unkown',
        uptime: {
          day: { up: 100, down: 25 },
          week: { up: 200, down: 55 },
          all: { up: 300, down: 100 },
        }
      },
      {
        id: 890,
        endpoint: 'rosenfeld.io:22',
        contacts: [ {id: 2, name: 'Aaron' } ],
        lastquery: '1288323693005',
        current: 'down',
        uptime: {
          day: { up: 100, down: 25 },
          week: { up: 200, down: 55 },
          all: { up: 300, down: 100 },
        }
      },
    ];
  }]);
})();
