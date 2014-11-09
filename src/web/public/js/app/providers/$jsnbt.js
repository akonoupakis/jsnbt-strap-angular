/* global angular:false */

(function () {
    "use strict";

    angular.module("jsnbt")
        // the $jsnbt is just a shortcut to the jsnbt global variable that is injected into the head section
        .provider("$jsnbt", function () {

            return {

                $get: function () {

                    return jsnbt;

                }

            };
        });
})();