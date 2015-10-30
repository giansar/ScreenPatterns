(function () {
    'use strict';
    angular.module('app.service', ['ngResource'])
            .service('userService', ['$resource', userService]);

    function userService($resource) {
        return $resource('http://giansar.net/api/user/:switch', null, {
            'update': {
                method: 'PUT'
            }
        });
    }
})();