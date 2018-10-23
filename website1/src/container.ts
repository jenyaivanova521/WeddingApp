const { Lifetime, createContainer, asValue, asFunction, asClass } = require('awilix')

import Application from './Application';
import Server from './Server';
import router from './router';
import logger from 'helpers/logger';
import config from 'config';
import { scopePerRequest } from 'awilix-express';

const container = createContainer()

container
  .register({
    app: asClass(Application).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton(),
    config: asValue(config),
    scopePerRequest: asValue(scopePerRequest(container))
});

// Routes
container.loadModules([
    'routes/*.js',
    'controllers/*.js',
    'services/*.js'
], {
    cwd: __dirname,
    registrationOptions: {
        lifetime: Lifetime.SINGLETON,
        register: asClass
    },
    formatName: 'camelCase'
});


export default container;
