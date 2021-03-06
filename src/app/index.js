var app = null;

module.exports = {
    
    domain: 'public',

    init: function (application) {
        app = application;
    },

    getConfig: function () {
        return require('../cfg/config.js');
    },

    getVersion: function () {
        return require('../../package.json').version;
    },

    getBower: function () {
        return require('../web/bower.json');
    },

    route: function (server, ctx, next) {
        // intercept the routing process here, or trigger the next router        

        next();
    },

    routeNode: function (server, ctx, resolved, next) {

        if (ctx.restricted) {
            // intercepted here, could redirect to a login page
            next();
        }
        else {
            next();
        }

    },

    routeCustom: function (server, ctx, next) {
        // custom route from router node

        next();        
    },

    view: {

        preparse: function (server, ctx, preparsingContext, next) {
            // change here the preparsingContext.model and the preparsingContext.tmpl before rendering
            next(preparsingContext);
        },

        postparse: function (server, ctx, postparsingContext, next) {
            // change here the postparsingContext.html upon render
            next(postparsingContext);
        }

    }

};