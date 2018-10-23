import Server from './Server';
import { ILogger } from 'helpers/logger';

class Application {
    server: Server;
    logger: ILogger;
    constructor({ server, logger}: { server: Server, logger: ILogger }) {
        this.server = server;
        this.logger = logger;
    }

    async start() {
        await this.server.start();
    }
}

export default Application;
