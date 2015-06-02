module.exports = {
        
    //locale: 'en',

    //ssl: true,

    //restricted: true,

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

    templates: [{
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
    }]

};