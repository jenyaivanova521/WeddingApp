import * as path from 'path';
const logPath = path.join(__dirname, '../../../logs/development.log');

module.exports = {
    web: {
        port: 3001
    },
    salt: '04C99518AFCD95D517B337A5C14DBE21',
    apiUrl: 'https://api.dev-c01.muulabs.pl/v1/',
    spaUrl: 'https://app.dev-c01.muulabs.pl',
    cdnUrl: 'https://storage.googleapis.com/wedding-app-dev',
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
    cookieDomain: 'dev-c01.muulabs.pl',
    redis: {
        host: "127.0.0.1",
        port: 6379
    },
    auth: {
        facebook: {
            clientID: 1473371242769200,
            clientSecret: '88834982adea7abc8e091980169235c0',
            callbackURL: 'https://dev-c01.muulabs.pl/login/facebook/callback'
        },
        google: {
            clientID: '547095225389-p0me9f4ujeu8ivtie54cv5fgfpmiqa9k.apps.googleusercontent.com',
            clientSecret: 'qVqyRM_VTj2uftxcon7fn-3n',
            callbackURL: 'https://dev-c01.muulabs.pl/login/google/callback'
        }
    }
};
