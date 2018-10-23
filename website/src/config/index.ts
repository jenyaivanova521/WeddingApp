require('dotenv').load();
import * as fs from 'fs';
import * as path from 'path';

const ENV = process.env.NODE_ENV || 'local';

const envConfig = require(path.join(__dirname, 'environments', ENV));

const config = Object.assign({
    env: ENV,
}, envConfig);

export default config;

export interface IConfig {
    env?: string;
    web?: {
        port?: number
    };
    salt: string;
    apiUrl: string;
    spaUrl: string;
    cdnUrl: string;
    logging?: {
        appenders: {},
        categories: {}
    },
    cookieDomain: string;
    redis: {
        host: string,
        port: number
    };
    auth: {
        facebook: {},
        google: {}
    }
}
