import { Router } from "express";
import { makeClassInvoker } from 'awilix-express';
import GuestController from 'controllers/GuestController';
import authenticate from 'middlewares/authenticate';
import { check } from 'express-validator/check';

export default class GuestRoutes {
    router: Router;
    controller: Function;
    config: any;
    constructor({ config, requestService }) {
        this.router = Router();
        this.controller = makeClassInvoker(GuestController);
        this.config = config;
    }

    getRoutes() {

        this.router.get('/guest-invitation/:token', this.controller('getGuestInvitation'));
        this.router.post('/guest-invitation/:token', this.controller('postGuestInvitation'));

        return this.router;
    }
}
