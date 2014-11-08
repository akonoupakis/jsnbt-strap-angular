/* global angular:false */

(function () {

    "use strict";

    angular.module('jsnbt')
    .config(function ($routeProvider) {

        $routeProvider.
            when('/layout', {
                templateUrl: 'tmpl/public/pages/layout.html',
                controller: 'LayoutController'
            });

    });

})();