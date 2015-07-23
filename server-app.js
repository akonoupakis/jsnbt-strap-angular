var hosts = require('./hosts.json');
var app = require('jsnbt');

app.init();

var server = app.createServer({
    host: hosts.web.host,
    port: hosts.web.port,
    db: {
        host: hosts.db.host,
        port: hosts.db.port,
        name: hosts.db.name
    }
});

server.start();