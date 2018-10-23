import { Router } from "express";
import * as bodyParser from 'body-parser';
import { IConfig } from 'config';
import RequestService from 'services/RequestService';
import AuthRoutes from 'routes/AuthRoutes';
import * as cookieParser from 'cookie-parser';
import { sanitizeBody } from 'express-validator/filter';
import * as flash from 'connect-flash';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
import * as redis from 'redis';
import * as express from 'express';
import * as path from 'path';

export default ({ config, scopePerRequest, requestService, authRoutes, profileRoutes, guestRoutes }) => {
    const router = Router();

    let redisStore = connectRedis(session);
    let redisClient = redis.createClient({
        host: config.redis.host,
        port: config.redis.port
    });

    router.use(session({
        store: new redisStore({
            client: redisClient
        }),
        secret: config.salt,
        resave: false,
        saveUninitialized: false
    }));
    router.use(flash());
    router.use(sanitizeBody('*').trim().escape());
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({
        extended: true
    }));
    router.use(cookieParser());
    router.use(scopePerRequest);

    router.use(async (req, res, next) => {
        req['user'] = false;
        let jwt = req.cookies.jwt;
        if (jwt && !req.query.noauth) {
            try {
                let authInfo = await requestService.make({
                    method: 'get',
                    url: 'auth/authenticate',
                    jwt: jwt
                });
                if (authInfo && authInfo.account) {
                    req['user'] = authInfo.account;
                    res.locals.user = authInfo.account;
                    res.locals.userString = JSON.stringify(authInfo, null, 1);
                }
            } catch (error) {
                if(error.statusCode !== 401) {
                    return next(error);
                }
            }
        }
        next();
    });

    router.use('/', authRoutes.getRoutes());
    router.use('/', guestRoutes.getRoutes());
    router.use('/profiles', profileRoutes.getRoutes());

    router.use(function(err, req, res, next) {
        res.render('error', {
            error: err
        });
        console.log(err);
    });

    return router;
};
