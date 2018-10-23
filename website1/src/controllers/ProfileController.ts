import express = require('express');
import RequestService from 'services/RequestService';
import { IConfig } from 'config';
import * as path from 'path';

export default class ProfileController {

    config: IConfig;
    requestService: RequestService;
    constructor({ config, requestService }: { config: IConfig, requestService: RequestService }) {
        this.config = config;
        this.requestService = requestService;
    }

    private async getProfile(req) {
        try {
            let jwt = req.cookies.jwt;
            let profile = await this.requestService.make({
                method: 'get',
                url: 'weddings/' + req.params.profileId,
                jwt: jwt
            });
            let onlyRegistered = (profile.privacySetting == 'registered' && !profile.description) ? true : false;
            let onlyFollowers = profile.privacySetting == 'followers' ? true : false;
            return { profile, onlyRegistered, onlyFollowers }
        } catch (error) {
            throw error;
        }
    }

    async getNewsFeed(req, res, next) {
        try {
            let { profile, onlyRegistered, onlyFollowers } = await this.getProfile(req);
            let jwt = req.cookies.jwt;
            let posts = await this.requestService.make({
                method: 'get',
                url: 'weddings/' + req.params.profileId + '/posts',
                jwt: jwt
            });
            res.render('profile/index', {
                profile: profile,
                posts: posts,
                onlyRegistered: onlyRegistered,
                onlyFollowers: onlyFollowers,
                restricted: (onlyFollowers || onlyRegistered) ? true : false,
                templateName: 'profile/subpages/newsFeed'
            });
        } catch (error) {
            next(error);
        }
    }

    async getInformations(req, res, next) {
        try {
            let jwt = req.cookies.jwt;
            let { profile, onlyRegistered, onlyFollowers } = await this.getProfile(req);
            let partners = await this.requestService.make({
                method: 'get',
                url: 'weddings/' + req.params.profileId + '/partners',
                jwt: jwt
            });
            let events = await this.requestService.make({
                method: 'get',
                url: 'weddings/' + req.params.profileId + '/events',
                jwt: jwt
            });
            res.render('profile/index', {
                profile: profile,
                partners: partners,
                events: events,
                onlyRegistered: onlyRegistered,
                onlyFollowers: onlyFollowers,
                restricted: (onlyFollowers || onlyRegistered) ? true : false,
                templateName: 'profile/subpages/informations'
            });
        } catch (error) {
            next(error);
        }
    }

    async getPhotos(req, res, next) {
        try {
            let jwt = req.cookies.jwt;
            let { profile, onlyRegistered, onlyFollowers } = await this.getProfile(req);
            res.render('profile/index', {
                profile: profile,

                onlyRegistered: onlyRegistered,
                onlyFollowers: onlyFollowers,
                restricted: (onlyFollowers || onlyRegistered) ? true : false,
                templateName: 'profile/subpages/photos'
            });
        } catch (error) {
            next(error);
        }
    }

    async getGuestList(req, res, next) {
        try {
            let jwt = req.cookies.jwt;
            let { profile, onlyRegistered, onlyFollowers } = await this.getProfile(req);
            res.render('profile/index', {
                profile: profile,

                onlyRegistered: onlyRegistered,
                onlyFollowers: onlyFollowers,
                restricted: (onlyFollowers || onlyRegistered) ? true : false,
                templateName: 'profile/subpages/guestList'
            });
        } catch (error) {
            next(error);
        }
    }

};
