(function () {
    'use strict';
    angular.module('registration', ['app.service'])
            .directive('compareTo', [compareTo])
            .controller('RegistrationController', ['$mdSidenav', 'userService', RegistrationController]);

    function compareTo() {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function (scope, elm, attrs, ngModel) {
                ngModel.$validators.compareTo = function (modelValue) {
                    return modelValue === scope.otherModelValue;
                };
                scope.$watch("otherModelValue", function () {
                    ngModel.$validate();
                });
            }
        };
    }

    function RegistrationController($mdSidenav, userService) {
        var vm = this;
        $mdSidenav('left').close().then(function () {});
        vm.saved = false;
        vm.reset = function (form) {
            vm.name = '';
            vm.email = '';
            vm.password = '';
            vm.password_confirmation = '';
            vm.birthdate = '';
            vm.gender = '';
            form.$setPristine();
            form.$setUntouched();
            vm.saved = false;
        };
        vm.save = function () {
            userService.save(
                    {},
                    angular.toJson(vm),
                    function () {
                        vm.saved = true;
                    },
                    function () {

                    });
        };
    }
})();