/* global angular:false */

(function () {

    "use strict";

    angular.module('jsnbt')
    .config(function ($routeProvider) {

        $routeProvider.
            when('/extra', {
                templateUrl: 'tmpl/public/pages/extra.html',
                controller: 'ExtraController'
            });

    });

})();