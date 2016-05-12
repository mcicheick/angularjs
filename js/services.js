'use strict';

/* Services */

var ikasuguServices = angular.module('ikasuguServices', []);

ikasuguServices.factory('Announce', ['$http',
    function ($http) {
        return {
            announces: function (page) {
                if (page == undefined) {
                    page = 1;
                }
                return $http.get(Routes.GET_ANNOUNCES, {page: page})
            },
            getAnnounce: function (id) {
                return $http.get(Routes.GET_ANNOUNCE_WITH_ID.replace("%d", id))
            }
        }
    }
]);