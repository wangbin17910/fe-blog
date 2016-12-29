var path = require('path'),
    fs = require("fs"),
    mysqlInfo = pa,
    config;

config = {
    production: {
        url: 'http://f2e.dev.didatrip.com',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'root',
                password: 'lvjinlong',
                database: 'luojilab_blog',
                charset: 'utf8'
            }
        },

        server: {
            host: '0.0.0.0',
            port: '9922'
        }
    },
    development: {
        url: 'http://localhost:9922',

        // Example refferer policy
        // Visit https://www.w3.org/TR/referrer-policy/ for instructions
        // default 'origin-when-cross-origin',
        // referrerPolicy: 'origin-when-cross-origin',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        database: {
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'ghost_development',
                charset: 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '9922'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }
};

module.exports = config;
