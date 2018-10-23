import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Profile } from '../common-models';

export enum ProfileActionTypes {
    SET_PROFILES = '[PROFILE] Set profiles',
    SET_ACTIVE_PROFILE = '[PROFILE] Set active profile',
    SET_ACTIVE_PROFILE_SUCCESS = '[PROFILE] Set active profile success',
    SET_ACTIVE_PROFILE_FAILURE = '[PROFILE] Set active profile failure'
}

export class SetProfiles implements Action {
    readonly type = ProfileActionTypes.SET_PROFILES;

    constructor(public payload?: {
        profiles: any
    }) { }
}

export class SetActiveProfile implements Action {
    readonly type = ProfileActionTypes.SET_ACTIVE_PROFILE;

    constructor(public payload?: {
        profile: Profile | any,
        accountId: string
    }) { }
}

export class SetActiveProfileSuccess implements Action {
    readonly type = ProfileActionTypes.SET_ACTIVE_PROFILE_SUCCESS;

    constructor(public payload: {
        profile: Profile
    }) { }
}

export class SetActiveProfileFailure implements Action {
    readonly type = ProfileActionTypes.SET_ACTIVE_PROFILE_FAILURE;
}

export type ProfileActions = SetProfiles
| SetActiveProfile
| SetActiveProfileSuccess
| SetActiveProfileFailure;
