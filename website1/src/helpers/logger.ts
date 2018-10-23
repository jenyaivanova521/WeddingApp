import * as Log4js from 'log4js';
import { IConfig } from 'config';

export interface ILogger {
    info?: Function;
    error?: Function;
}

export default ({ config }: { config: IConfig }) => {
    Log4js.configure(config.logging);

    return Log4js.getLogger();
};
