import * as path from 'path';
const logPath = path.join(__dirname, '../../../logs/staging.log');

module.exports = {
    web: {
        port: 4001
    },
    salt: '072F3A6D30CFA7E8874BEDD846F295AD',
    apiUrl: 'https://api.staging-c01.muulabs.pl/v1/',
    spaUrl: 'https://app.staging-c01.muulabs.pl',
    cdnUrl: 'https://storage.googleapis.com/wedding-app-staging',
    logging: {
        appenders: {
            console: { type: 'console' },
            file: {
                type: 'file',
                filename: logPath
            }
        },
        categories: {
            default: { appenders: ['console'], level: 'info' },
            file: { appenders: ['file'], level: 'info' }
        }
    },
    cookieDomain: 'staging-c01.muulabs.pl',
    redis: {
        host: "127.0.0.1",
        port: 6379
    },
    auth: {
        facebook: {
            clientID: 637239626620497,
            clientSecret: '3e8fdf9b22b859bab7aebb551385cb59',
            callbackURL: 'https://staging-c01.muulabs.pl/login/facebook/callback'
        },
        google: {
            clientID: '547095225389-7jb38u9t9d98aiubis2vfcuqjd4uv8na.apps.googleusercontent.com',
            clientSecret: '_1NJQWw6iQfrtAVyO0_pT5l8',
            callbackURL: 'https://staging-c01.muulabs.pl/login/google/callback'
        }
    }
};
