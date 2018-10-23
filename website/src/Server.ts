import * as express from 'express';
import * as path from 'path';
import * as exphbs from 'express-handlebars';
import { IConfig } from 'config';
import { ILogger } from 'helpers/logger';
import { hbsHelpers } from 'helpers/hbsHelpers';

class Server {
    config: IConfig;
    router: () => void;
    logger: ILogger;
    constructor({ config, router, logger }: { config: IConfig, router: () => void, logger: ILogger }) {
        this.config = config;
        this.logger = logger;
        this.router = router;
    }

    start() {
        return new Promise((resolve) => {
            let server = express();
            server.disable('x-powered-by');
            server.set('views', path.join(__dirname, '/views'));
            server.engine('.hbs', exphbs({
                defaultLayout: 'main',
                layoutsDir: path.join(__dirname, '/views/layouts'),
                partialsDir: path.join(__dirname, '/views'),
                extname: '.hbs',
                helpers: hbsHelpers()
            }));
            server.set('view engine', '.hbs');
            server.use((req, res, next) => {
                const assets = require('./assets.json');
                res.locals.path = req.path;
                res.locals.assets = JSON.parse(JSON.stringify(assets));
                next();
            });
            server.use(express.static(path.join(__dirname, 'public')));
            server.locals.config = this.config;
            server.use('/', this.router);

            const http = server.listen(this.config.web.port, () => {
                const { port } = http.address();
                this.logger.info(`[p ${process.pid}] Listening at port ${port}`);
                resolve();
            });
        });
    }
}

export default Server;
