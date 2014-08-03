'use strict';

(function() {
angular.module('phpwatchApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/monitors', {
        templateUrl: 'views/monitors.html',
        controller: 'MonitorsCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .otherwise({
        redirectTo: '/monitors'
      });
  }]);
})();
