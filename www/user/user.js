(function () {
    'use strict';
    angular.module('user', ['app.service'])
            .controller('UserController', ['$mdSidenav', 'userService', UserController]);

    function UserController($mdSidenav, userService) {
        var vm = this;
        $mdSidenav('left').close().then(function () {});
        vm.loading = true;
        vm.error = false;
        vm.listTitle = 'List of Users to enable or disable login';
        vm.users = userService.get(
                function (success) {
                    vm.loading = false;
                },
                function (error) {
                    vm.error = true;
                    vm.errorMessage = error;
                });
        vm.updateActivation = function (item) {
            vm.loading = true;
            userService.update(
                    {switch : 'activation'},
                    angular.toJson(item),
                    function (success) {
                        vm.loading = false;
                    },
                    function (error) {
                        vm.error = true;
                        vm.errorMessage = error;
                    });
        };
    }
})();