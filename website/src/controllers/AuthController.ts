import express = require('express');
const { validationResult } = require('express-validator/check');
import RequestService from 'services/RequestService';
import { IConfig } from 'config';
import * as path from 'path';

export default class AuthController {

    config: IConfig;
    requestService: RequestService;
    constructor({ config, requestService }: { config: IConfig, requestService: RequestService }) {
        this.config = config;
        this.requestService = requestService;
    }

    async index(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            let weddings = await this.requestService.make({
                method: 'get',
                url: 'weddings?limit=4&random=1'
            });
            res.render('index', {
                flash: req['flash'](),
                weddings: weddings
            });
        } catch (error) {
            next(error);
        }
    }

    getLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            if (req['user']) {
                res.redirect(this.config.spaUrl);
            } else {
                if (req.query && req.query.redirect) {
                    res.cookie('redirect', (req.query.app ? this.config.spaUrl : '') + req.query.redirect, {
                        httpOnly: true,
                        domain: this.config.cookieDomain
                    });
                }
                res.render('auth/login', {
                    flash: req['flash'](),
                    form: {
                        email: req.query.email
                    }
                });
            }
        } catch (error) {
            next(error);
        }
    }

    async postLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            let credentials = {
                email: req.body.email,
                password: req.body.password
            }
            try {
                let response = await this.requestService.make({
                    method: 'post',
                    url: 'auth/authenticate'
                }, credentials);
                res.cookie('jwt', response.token, {
                    maxAge: 24 * 60 * 60 * 1000,
                    httpOnly: false,
                    domain: this.config.cookieDomain
                });
                let redirect = req.cookies.redirect;
                if (redirect) {
                    res.clearCookie('redirect');
                    return res.redirect(redirect);
                } else {
                    return res.redirect(this.config.spaUrl);
                }
            } catch (error) {
                req['flash']('danger', JSON.parse(error.error).title);
            }
        } else {
            req['flash']('danger', 'VALIDATION_ERROR'); // TODO: fix this
        }
        res.redirect('/login');
    }

    async getLogout(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            let jwt = req.cookies.jwt;
            await this.requestService.make({
                method: 'post',
                url: 'auth/logout',
                jwt: jwt
            });
            res.clearCookie('jwt');
        } catch (error) {

        }
        res.redirect('/login');
    }

    getSignup(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            if (req['user']) {
                return res.redirect('/');
            }
            res.render('auth/signup', {
                flash: req['flash'](),
                form: {
                    email: req.query.email
                }
            });
        } catch (error) {
            next(error);
        }
    }

    async postSignup(req: express.Request, res: express.Response, next: express.NextFunction) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let account = {
                email: req.body.email,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: req.body.password,
                password_repeat: req.body.password_repeat,
                account_type_id: req.body.account_type_id
            };
            try {
                await this.requestService.make({
                    method: 'post',
                    url: 'auth/register'
                }, account);
                req['flash']('success', 'ACCOUNT_REGISTERED');
                return res.redirect('/login');
            } catch (error) {
                req['flash']('danger', JSON.parse(error.error).title);
            }
        } else {
            req['flash']('danger', 'VALIDATION_ERROR'); // TODO: fix this
        }
        res.render('auth/signup', {
            flash: req['flash'](),
            form: req.body
        });
    }

    async getActivate(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            if (req.query && req.query.redirect) {
                res.cookie('redirect', (req.query.app ? this.config.spaUrl : '') + req.query.redirect, {
                    httpOnly: true,
                    domain: this.config.cookieDomain
                });
            }
            await this.requestService.make({
                method: 'post',
                url: 'auth/activate'
            }, {
                    hash: req.params.hash
                });
            req['flash']('success', 'ACCOUNT_ACTIVATED');
        } catch (error) {
            req['flash']('danger', JSON.parse(error.error).title);
        }
        res.redirect('/login');
    }

    getRemindPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            res.render('auth/remindPassword', {
                flash: req['flash']()
            });
        } catch (error) {
            next(error);
        }
    }

    async postRemindPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await this.requestService.make({
                    method: 'post',
                    url: 'auth/password/remind'
                }, {
                        email: req.body.email
                    });
            } catch (error) {
                // security reason
            }
            req['flash']('success', 'PASSWORD_REMINDER_SENT');
            if (req['user']) {
                return res.redirect('/');
            }
            return res.redirect('/login');
        } else {
            req['flash']('danger', 'VALIDATION_ERROR'); // TODO: fix this
        }
        res.render('auth/remindPassword', {
            flash: req['flash']()
        });
    }

    getResetPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            res.render('auth/resetPassword', {
                flash: req['flash']()
            });
        } catch (error) {
            next(error);
        }
    }

    async postResetPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                await this.requestService.make({
                    method: 'post',
                    url: 'auth/password/set'
                }, {
                        hash: req.params.hash,
                        password: req.body.password,
                        password_repeat: req.body.password_repeat
                    });
                req['flash']('success', 'PASSWORD_CHANGED');
                if (req['user']) {
                    return res.redirect('/');
                }
                return res.redirect('/login');
            } catch (error) {
                req['flash']('danger', JSON.parse(error.error).title);
            }
        } else {
            req['flash']('danger', 'VALIDATION_ERROR'); // TODO: fix this
        }
        res.redirect('/reset/' + req.params.hash);
    }

    async getForgetMe(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            res.render('auth/forget', {
                flash: req['flash']()
            });
        } catch (error) {
            throw error;
        }
    }

    async postForgetMe(req: express.Request, res: express.Response, next: express.NextFunction) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                let jwt = req.cookies.jwt;
                await this.requestService.make({
                    method: 'post',
                    url: 'auth/forget',
                    jwt: jwt
                }, {
                        password: req.body.password
                    });
                req['flash']('success', 'ACCOUNT_DELETED');
                return res.redirect('/login');
            } catch (error) {
                req['flash']('danger', JSON.parse(error.error).title);
            }
        } else {
            req['flash']('danger', 'VALIDATION_ERROR'); // TODO: fix this
        }
        res.render('auth/forget', {
            flash: req['flash']()
        });
    }

    async getChangePassword(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            res.render('auth/changePassword', {
                flash: req['flash']()
            });
        } catch (error) {
            throw error;
        }
    }

    async postChangePassword(req: express.Request, res: express.Response, next: express.NextFunction) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            try {
                let jwt = req.cookies.jwt;
                await this.requestService.make({
                    method: 'post',
                    url: 'auth/password/change',
                    jwt: jwt
                }, {
                        password: req.body.password,
                        password_new: req.body.password_new,
                        password_new_repeat: req.body.password_new_repeat
                    });
                req['flash']('success', 'PASSWORD_CHANGED');
                return res.redirect('/');
            } catch (error) {
                req['flash']('danger', JSON.parse(error.error).title);
            }
        } else {
            req['flash']('danger', 'VALIDATION_ERROR'); // TODO: fix this
        }
        res.render('auth/changePassword', {
            flash: req['flash']()
        });
    }

    async getAcceptInvitationWithHash(req, res, next) {
        try {
            let authInfo = req.user;
            let memberInvitation = await this.requestService.make({
                method: 'get',
                url: 'members/invitations/' + req.params.invitationId + '?hash=' + req.params.tokenHash
            });
            if (!memberInvitation) {
                req['flash']('danger', 'INVALID_INVITATION_LINK');
            }
            if (authInfo) {
                return res.redirect('/accept-invitation/' + req.params.invitationId);
            } else {
                res.cookie('redirect', '/accept-invitation/' + req.params.invitationId, {
                    httpOnly: true,
                    domain: this.config.cookieDomain
                });
            }

            if (!memberInvitation.member.accountId) {
                return res.redirect('/signup?email=' + encodeURIComponent(memberInvitation.member.email));
            } else {
                return res.redirect('/login?email=' + encodeURIComponent(memberInvitation.member.email));
            }

        } catch (error) {
            req['flash']('danger', JSON.parse(error.error).title);
        }
    }

    async getAcceptInvitation(req, res, next) {
        try {
            let jwt = req.cookies.jwt;
            let authInfo = req.user;
            let memberInvitation = await this.requestService.make({
                method: 'get',
                url: 'members/invitations/' + req.params.invitationId,
                jwt: jwt
            });
            if (!memberInvitation) {
                req['flash']('danger', 'INVALID_INVITATION_LINK');
            }
            if (authInfo.email != memberInvitation.member.email) {
                req['flash']('danger', 'INVALID_ACCOUNT');
            } else {
                await this.requestService.make({
                    method: 'post',
                    url: 'weddings/' + memberInvitation.wedding.id + '/members/' + memberInvitation.member.id + '/invitations/' + req.params.invitationId,
                    jwt: jwt
                });
                return res.redirect('/login');
            }
        } catch (error) {
            req['flash']('danger', JSON.parse(error.error).title);
        }
        res.render('auth/acceptInvitation', {
            flash: req['flash']()
        });
    }

};
