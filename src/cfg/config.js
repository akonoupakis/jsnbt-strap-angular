module.exports = {
        
    //locale: 'en',

    //ssl: true,
    
    fileGroups: [],

    images: [],

    injects: {
        navigation: [{
            index: 5,
            identifier: 'extra',
            name: 'extra',
            url: '/extra',
        }],
        dashboard: 'tmpl/public/injects/dashboard.html',
        content: 'tmpl/public/injects/content.html',
        settings: 'tmpl/public/injects/settings.html'
    },

    layouts: [{
        id: 'common',
        name: 'common layout',
        form: 'tmpl/public/layouts/common.html'
    }],

    containers: [{
        id: 'sampleContainer',
        name: 'sample container',
        html: '/tmpl/partials/containers/sampleContainer.html',
    }],

    scripts: [{
        name: 'lib',
        items: [
            '/js/lib/angular.js',
            '/js/lib/jquery.js',
            '/js/lib/underscore.js',
            '/js/lib/underscore.string.js'
        ]
    }, {
        name: 'app',
        items: [
            '/jsnbt.js',
            '/js/app/main.js',
            '/js/app/controllers/AppController.js',
            '/js/app/controllers/StoreController.js',
            '/js/app/controllers/StoresController.js',
            '/js/app/directives/ctrlMap.js',
            '/js/app/providers/$context.js',
            '/js/app/providers/$data.js',
            '/js/app/providers/$image.js',
            '/js/app/providers/$jsnbt.js',
            '/js/app/providers/$link.js',
            '/js/app/providers/$text.js',
            '/js/init.js'
        ]
    }],

    templates: [{
        id: 'error',
        name: 'error page',
        html: '/error/error.html',
        restricted: [''],
        scripts: [
            ['lib', 'app']
        ],
        styles: [
            ['lib', 'app']
        ]
    }, {
        id: 'home',
        name: 'home page',
        html: '/tmpl/index.html',
        form: 'tmpl/public/forms/node/home.html',
        restricted: ['page']
    }],

    lists: [{
        id: 'sampleList',
        name: 'Sample List',
        form: 'tmpl/public/forms/list/sampleList.html',
        localized: true,
        permissions: [{
            role: 'public',
            crud: ['R']
        }, {
            role: 'admin',
            crud: ['C', 'R', 'U', 'D']
        }]
    }],

    register: function () {

        return require('../../config.json');

    }

};