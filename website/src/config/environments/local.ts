import * as path from 'path';
const logPath = path.join(__dirname, '../../logs/local.log');

module.exports = {
    web: {
        port: 3001
    },
    salt: '0A040EC34ABBFB7F3030345244A913C9',
    apiUrl: 'http://localhost:3000/v1/',
    spaUrl: 'http://localhost:4200',
    cdnUrl: 'https://storage.googleapis.com/wedding-app-local',
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
    cookieDomain: 'localhost',
    redis: {
        host: "127.0.0.1",
        port: 6379
    },
    auth: {
        facebook: {
            clientID: 378220356015289,
            clientSecret: '6f2512b2b403b6484b543c471dc501c5',
            callbackURL: 'http://localhost:3001/login/facebook/callback'
        },
        google: {
            clientID: '970191593008-bp5isjbadtj5quomivkkmi11vq24g9js.apps.googleusercontent.com',
            clientSecret: 'BsuqzhbtHmYsVU0rt1TP6Ji5',
            callbackURL: 'http://localhost:3001/login/google/callback'
        }
    }
};
