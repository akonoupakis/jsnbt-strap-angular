/* global angular:false */

(function () {
    "use strict";

    angular.module("jsnbt")
        .provider("$context", function () {
            
            return {
                
                $get: function () {

                    var ctx = {
                        pageId: $('head > meta[name="page"]').prop('content'),
                        pointerId: $('head > meta[name="pointer"]').prop('content'),

                        language: $('html').prop('lang')
                    };

                    return ctx;

                }

            };
        });
})();