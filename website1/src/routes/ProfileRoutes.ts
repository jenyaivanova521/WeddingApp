import { Router } from "express";
import { makeClassInvoker } from 'awilix-express';
import ProfileController from 'controllers/ProfileController';
import authenticate from 'middlewares/authenticate';
import { check } from 'express-validator/check';

export default class ProfileRoutes {
    router: Router;
    controller: Function;
    config: any;
    constructor({ config, requestService }) {
        this.router = Router();
        this.controller = makeClassInvoker(ProfileController);
        this.config = config;
    }

    getRoutes() {

        this.router.get('/:profileId', this.controller('getNewsFeed'));
        this.router.get('/:profileId/informations', this.controller('getInformations'));
        this.router.get('/:profileId/photos', this.controller('getPhotos'));
        this.router.get('/:profileId/guest-list', this.controller('getGuestList'));

        return this.router;
    }
}
