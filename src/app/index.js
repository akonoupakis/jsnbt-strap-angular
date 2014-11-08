module.exports = {

    domain: 'public',

    public: true,

    //restricted: true,

    //locale: 'en',

    specs: {
        navigation: [{
            index: 1,
            identifier: 'layout',
            name: 'layout',
            url: '/layout',
        }],
        dashboard: 'tmpl/public/specs/dashboard.html',
        content: 'tmpl/public/specs/content.html',
        settings: 'tmpl/public/specs/settings.html'
    },

    templates: [{
        path: '/tmpl/index.html',
        restricted: ['page']
    }, {
        path: '/tmpl/test.html'
    }],

    init: function (appplication) {
        // init any custom modules here
    }

};