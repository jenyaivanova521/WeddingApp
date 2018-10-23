import express = require('express');
import RequestService from 'services/RequestService';
import { IConfig } from 'config';
import * as path from 'path';

export default class GuestController {

    config: IConfig;
    requestService: RequestService;
    constructor({ config, requestService }: { config: IConfig, requestService: RequestService }) {
        this.config = config;
        this.requestService = requestService;
    }

    async getGuestInvitation(req, res, next) {
        try {
            let jwt = req.cookies.jwt;
            let guestInvitation = await this.requestService.make({
                method: 'get',
                url: 'guests/invitations/' + req.params.token,
                jwt: jwt
            });
            let showButtons = <any>{};
            if(guestInvitation) {
                showButtons = {
                    ceremony: {
                        reject: [2,3].indexOf(guestInvitation.ceremonyGuestStatus.id) > -1 ? true : false,
                        confirm: [2,4].indexOf(guestInvitation.ceremonyGuestStatus.id) > -1 ? true : false
                    },
                    reception: {
                        reject: [2,3].indexOf(guestInvitation.receptionGuestStatus.id) > -1 ? true : false,
                        confirm: [2,4].indexOf(guestInvitation.receptionGuestStatus.id) > -1 ? true : false
                    }
                }
            }
            res.render('guest/invitation', {
                guestInvitation: guestInvitation ? guestInvitation : null,
                partners: guestInvitation ? guestInvitation.wedding.partners : null,
                showButtons: showButtons
            });
        } catch (error) {
            next(error);
        }
    }

    async postGuestInvitation(req, res, next) {
        try {
            let jwt = req.cookies.jwt;
            let receptionInvitation = req.body.reception_invitation;
            let ceremonyInvitation = req.body.ceremony_invitation;
            await this.requestService.make({
                method: 'patch',
                url: 'guests/invitations/' + req.params.token,
                jwt: jwt
            }, {
                ceremonyStatusId: ceremonyInvitation ? (ceremonyInvitation == 'confirm' ? 3 : 4) : undefined,
                receptionStatusId: receptionInvitation ? (receptionInvitation == 'confirm' ? 3 : 4) : undefined
            });
            return res.redirect('/guest-invitation/' + req.params.token);
        } catch (error) {
            next(error);
        }
    }

};
