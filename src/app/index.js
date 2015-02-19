module.exports = {
    
    init: function (appplication) {
        // init any custom modules here
    },

    getConfig: function () {
        return require('./config.js');
    },

    route: function (ctx, next) {
        // intercept the routing process here, or trigger the next router        

        next();
    },

    view: {

        prerender: function (ctx) {
            // change here the ctx.model and the ctx.tmpl before rendering
        },

        render: function (ctx) {
            // change here the ctx.html upon render
        }

    }

};