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
        type: 'http',
        alias: 'Google HTTP',
        host: 'google.com',
        port: 80,
        failThresh: 1,
        downtimeStart: 0,
        downtimeEnd: 0,
        sendNotifications: 1,
        contacts: [ { id: 1, name: 'Bob', channels: [1, 2] }, { id: 5, name: 'Joe', channels: [4] } ],
        failCount: 100,
        failThreshold: 1,
        lastquery: '1288323623006',
        current: 'up',
        uptime: {
          day: { up: 100, down: 25 },
          week: { up: 200, down: 55 },
          all: { up: 300, down: 100 },
        },
        config: {
          timeout: 10,
          mode: 1,
          mathStr: "teststr",
          matchMethod: 1,
        }
      },
    ];
  }]);
})();
