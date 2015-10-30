(function () {
    'use strict';
    angular.module('app.config', ['ngRoute'])
            .config(config);

    function config($routeProvider) {
        $routeProvider
                .when('/register', {
                    templateUrl: 'registration/registration.html',
                    controller: 'RegistrationController',
                    controllerAs: 'register'
                })
                .when('/user', {
                    templateUrl: 'user/user.html',
                    controller: 'UserController',
                    controllerAs: 'user'
                });
    }
})();