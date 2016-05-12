'use strict';

/* App Module */

var ikasuguApp = angular.module('ikasuguApp', [
    'ngRoute',
    'ikasuguAnimations',
    'ikasuguControllers',
    'ikasuguFilters',
    'ikasuguServices'
]);

ikasuguApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/announces', {
                templateUrl: 'views/announce-list.html',
                controller: 'AnnounceListCtrl'
            })
            .when('/announces/:id', {
                templateUrl: 'views/announce-view.html',
                controller: 'AnnounceViewCtrl'
            })
            .otherwise({
                redirectTo: '/announces'
            });
    }]);
