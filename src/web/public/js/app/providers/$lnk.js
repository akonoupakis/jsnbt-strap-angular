/* global angular:false */

(function () {
    "use strict";

    angular.module("jsnbt")
        // the $link is used to build up a url for a given node
        // urls coming on the node objects from dpd do not always hold the full url, especially when pointed through a pointer node
        // the $link helps combining the urls of the two to form a full valid url for a node, for a given language
        .provider("$link", function () {

            return {

                $get: function () {

                    return {

                        build: function (language, page, pointer) {

                            if (page.entity === 'pointer') {
                                return page.enabled[language] ? page.url[language] : undefined;
                            }
                            else {

                                if (page.domain === 'core') {
                                    return page.enabled[language] ? page.url[language] : undefined;
                                }
                                else {
                                    if (pointer) {
                                        if (pointer.enabled[language] && page.enabled[language]) {
                                            var pointerNodeIndex = page.hierarchy.indexOf(pointer.pointer.nodeId);
                                            if (pointerNodeIndex !== -1) {
                                                var cropUrlIndex = pointerNodeIndex + 1;
                                                var pageUrlParts = (page.url[language] || '').split('/');
                                                if (pageUrlParts.length >= cropUrlIndex) {
                                                    var remainingUrl = _.str.ltrim(page.url[language], '/').split('/').slice(cropUrlIndex).join('/');
                                                    var resultUrl = pointer.url[language];
                                                    if (remainingUrl !== '')
                                                        resultUrl += '/' + remainingUrl;
                                                    return resultUrl;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    };

                }

            };
        });
})();