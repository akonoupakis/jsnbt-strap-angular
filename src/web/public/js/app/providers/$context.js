/* global angular:false */

(function () {
    "use strict";

    angular.module("jsnbt")
        // the $context is used to hold the context parameters for a served page.
        .provider("$context", function () {
            
            return {
                
                $get: function () {

                    var ctx = {
                        // the current language code (got from the page html tag)
                        language: $('html').prop('lang'),
                        // the current layout name (got from the page meta tags)
                        layout: $('head > meta[name="layout"]').prop('content'),
                        // the current page id (got from the page meta tags)
                        page: $('head > meta[name="page"]').prop('content'),
                        // the current pointer id (got from the page meta tags)
                        pointer: $('head > meta[name="pointer"]').prop('content')
                    };

                    return ctx;

                }

            };
        });
})();