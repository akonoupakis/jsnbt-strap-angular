module.exports = {

    domain: 'public',

    public: true,

    //restricted: true,

    //locale: 'en',

    injects: {
        navigation: [{
            index: 5,
            identifier: 'extra',
            name: 'extra',
            url: '/extra',
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
    }]

};