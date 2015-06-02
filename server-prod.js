var app = require('jsnbt/src/app/app.js');
var index = require('./src/app/index.js');

app.init({
    title: 'prod'
}, index);

var server = app.createServer({
    env: 'prod',
    host: 'localhost',
    port: 3000,
    db: {
        host: 'localhost',
        port: 27017,
        name: 'dbname'
    }
});

server.start();