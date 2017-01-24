var path = require('path'),
    fs = require("fs"),
    config;

var mysqlInfo = JSON.parse(fs.readFileSync(path.join(__dirname, '../sys-config/luojilab_my_sql_pwd.json')).toString());

config = {
    production: {
        url: 'http://f2e.luojilab.org/',
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: 'postmaster@f2e.luojilab.org', // mailgun username
                    pass: mysqlInfo.mailpwd // mailgun password
                }
            }
        },
        database: {
            client: 'mysql',
            connection: {
                host: 'localhost',
                user: mysqlInfo.name,
                password: mysqlInfo.pwd,
                database: mysqlInfo.database,
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
        //              user: 'postmaster@sandbox5b6b499ab64c43eeb18957104671bceb.mailgun.org', // mailgun username
        //              pass: '36617ba6b75d105720613264ca7b4b55'  // mailgun password
        //          }
        //      }
        //  },
        // ```
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // database: {
        //     client: 'mysql',
        //     connection: {
        //         host: 'localhost',
        //         user: mysqlInfo.name,
        //         password: mysqlInfo.pwd,
        //         database: mysqlInfo.database,
        //         charset: 'utf8'
        //     }
        // },
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
