'use strict';

/* Controllers */

var ikasuguControllers = angular.module('ikasuguControllers', []);

ikasuguControllers.controller('BaseCtrl', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
        $rootScope.isMenuSelected = function (menu) {
            return menu === $scope.menuSelected;
        };
    }
]);

ikasuguControllers.controller('AnnounceListCtrl', ['$scope', '$log', '$rootScope', '$controller', 'Announce',
    function ($scope, $log, $rootScope, $controller, Announce) {
        angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));
        $rootScope.title = "Announce List";
        $scope.menuSelected = 0;
        $scope.page = 1;
        Announce.announces($scope.page)
            .success(function (response) {
                $scope.announces = response;
                $log.info(response)
            })
            .error(function (error) {
                $log.error(error)
            })
        ;
    }]);

ikasuguControllers.controller('AnnounceViewCtrl', ['$scope', '$log', '$rootScope', '$controller', '$routeParams', 'Announce',
    function ($scope, $log, $rootScope, $controller, $routeParams, Announce) {
        angular.extend(this, $controller('BaseCtrl', {$scope: $scope}));
        $scope.menuSelected = 1;
        Announce.getAnnounce($routeParams.id)
            .success(function (response) {
                $log.info(response);
                $scope.announce = response;
                $rootScope.title = response.title;
            })
            .error(function (error) {
                $log.error(error)
            });
    }
]);