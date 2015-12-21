module.exports = function (hosts) {

    var app = require('jsnbt').create();

    app.init();

    var server = app.createMigrator({
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
