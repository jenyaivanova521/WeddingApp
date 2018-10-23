import { Router } from "express";
import { makeClassInvoker } from 'awilix-express';
import AuthController from 'controllers/AuthController';
import RequestService from 'services/RequestService';
import authenticate from 'middlewares/authenticate';
import * as passport from 'passport';
import { Strategy as facebookStrategy } from 'passport-facebook';
import { Strategy as googleStrategy } from 'passport-google-oauth20';
import { check } from 'express-validator/check';

export default class AuthRoutes {
    router: Router;
    controller: Function;
    config: any;
    requestService: RequestService;
    constructor({ config, requestService }) {
        this.router = Router();
        this.controller = makeClassInvoker(AuthController);
        this.config = config;
        this.requestService = requestService;
    }

    private async _authenticateSocial(data) {
        try {
            let requestBody = {
                foreign_id: data.foreignId,
                provider: data.provider,
                token: data.token
            };
            if (data.email) {
                await this.requestService.make({
                    method: 'post',
                    url: 'auth/register/social'
                }, Object.assign(requestBody, {
                    email: data.email,
                    first_name: data.firstName,
                    last_name: data.lastName
                }));
            }
            let jwt = await this.requestService.make({
                method: 'post',
                url: 'auth/authenticate/social'
            }, requestBody);
            return jwt.token;
        } catch (error) {
            throw error;
        }
    }

    private async _setJwtCookie(req, res, next) {
        if (req['jwt']) {
            res.cookie('jwt', req['jwt'], {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: false,
                domain: this.config.cookieDomain
            });
            let redirect = req.cookies.redirect;
            if(redirect) {
                return res.redirect(req.cookies.redirect);
            } else {
                return res.redirect(this.config.spaUrl);
            }
        }
        next();
    }

    private async _socialLoginCallback(req, token, refreshToken, profile, done, provider) {
        try {
            req['jwt'] = await this._authenticateSocial({
                foreignId: profile.id,
                provider: provider,
                token: token,
                email: null
            });
            done(null, true);
        } catch (error) {
            let displayMessage = 'AUTHENTICATION_ERROR';
            if (error.statusCode && error.statusCode == 404) { // user not found, try to register
                try {
                    req['jwt'] = await this._authenticateSocial({
                        foreignId: profile.id,
                        provider: provider,
                        token: token,
                        email: profile.emails[0].value,
                        firstName: profile.name.givenName || profile.emails[0].value.split('@')[0],
                        lastName: profile.name.familyName || profile.emails[0].value.split('@')[0]
                    });
                    done(null, true);
                } catch (error) {
                    if (error.error) {
                        displayMessage = JSON.parse(error.error).title;
                    }
                    req['flash']('danger', displayMessage);
                    done(null, null);
                }
            } else {
                req['flash']('danger', displayMessage);
                done(null, null);
            }
        }
    }

    getRoutes() {
        this.router.use(passport.initialize());
        this.router.get('/', this.controller('index'));
        this.router.get('/login', this.controller('getLogin'));
        this.router.get('/signup', this.controller('getSignup'));
        this.router.get('/logout', authenticate, this.controller('getLogout'));
        this.router.get('/activate/:hash', this.controller('getActivate'));
        this.router.get('/remind', this.controller('getRemindPassword'));
        this.router.get('/reset/:hash', this.controller('getResetPassword'));
        this.router.get('/forget', authenticate, this.controller('getForgetMe'));
        this.router.get('/change-password', authenticate, this.controller('getChangePassword'));

        this.router.post('/login', [
            check('email').not().isEmpty().isEmail(),
            check('password').not().isEmpty()
        ], this.controller('postLogin'));

        this.router.post('/signup', [
            check('first_name').not().isEmpty(),
            check('last_name').not().isEmpty(),
            check('email').not().isEmpty().isEmail(),
            check('password').not().isEmpty().isLength({ min: 8 }),
            check('password_repeat').not().isEmpty().custom((value, { req }) => value == req.body.password),
            check('account_type_id').not().isEmpty()
        ], this.controller('postSignup'));

        this.router.post('/remind', [
            check('email').not().isEmpty().isEmail(),
        ], this.controller('postRemindPassword'));

        this.router.post('/reset/:hash', [
            check('hash').not().isEmpty(),
            check('password').not().isEmpty().isLength({ min: 8 }),
            check('password_repeat').not().isEmpty().custom((value, { req }) => value == req.body.password)
        ], this.controller('postResetPassword'));

        this.router.post('/forget', [
            check('password').not().isEmpty().isLength({ min: 8 }),
        ], authenticate, this.controller('postForgetMe'));

        this.router.post('/change-password', [
            check('password').not().isEmpty().isLength({ min: 8 }),
            check('password_new').not().isEmpty().isLength({ min: 8 }),
            check('password_new_repeat').not().isEmpty().custom((value, { req }) => value == req.body.password_new)
        ], authenticate, this.controller('postChangePassword'));

        // Facebook auth
        passport.use(new facebookStrategy({
            clientID: this.config.auth.facebook.clientID,
            clientSecret: this.config.auth.facebook.clientSecret,
            callbackURL: this.config.auth.facebook.callbackURL,
            profileFields: ['id', 'email', 'displayName', 'name'],
            passReqToCallback: true
        },
            async (req, token, refreshToken, profile, done) => {
                await this._socialLoginCallback(req, token, refreshToken, profile, done, 'facebook');
            }
        ));
        this.router.get('/login/facebook',
            passport.authenticate('facebook', {
                scope: ['public_profile', 'email'],
                session: false
            })
        );
        this.router.get('/login/facebook/callback',
            passport.authenticate('facebook', {
                failureRedirect: '/login',
                session: false
            }),
            (req, res, next) => {
                return this._setJwtCookie(req, res, next)
            }
        );

        // Google auth
        passport.use(new googleStrategy({
            clientID: this.config.auth.google.clientID,
            clientSecret: this.config.auth.google.clientSecret,
            callbackURL: this.config.auth.google.callbackURL,
            passReqToCallback: true
        },
            async (req, token, refreshToken, profile, done) => {
                await this._socialLoginCallback(req, token, refreshToken, profile, done, 'google');
            }
        ));
        this.router.get('/login/google',
            passport.authenticate('google', {
                scope: ['email'],
                session: false
            })
        );
        this.router.get('/login/google/callback',
            passport.authenticate('google', {
                failureRedirect: '/login',
                session: false
            }),
            (req, res, next) => {
                return this._setJwtCookie(req, res, next)
            }
        );

        this.router.get('/accept-invitation/:invitationId/:tokenHash', [
            check('invitationId').isLength({ min: 32, max: 32 }),
            check('tokenHash').isLength({ min: 64, max: 64 })
        ], this.controller('getAcceptInvitationWithHash'));

        this.router.get('/accept-invitation/:invitationId', [
            check('invitationId').isLength({ min: 32, max: 32 })
        ], authenticate, this.controller('getAcceptInvitation'));

        return this.router;
    }
}
