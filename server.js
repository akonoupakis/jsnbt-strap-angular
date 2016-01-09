module.exports = function (hosts, config) {

    var app = require('jsnbt').create();

    app.init(config);

    var server = app.createServer({
        host: hosts.web.host,
        port: hosts.web.port,
        db: {
            host: hosts.db.host,
            port: hosts.db.port,
            name: hosts.db.name
        }
    });

    return server;

}
