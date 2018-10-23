import { Action } from '@ngrx/store';
import { ProfileActions, ProfileActionTypes } from './actions';
import { initialState, State } from './state';

export function reducer(state = initialState, action: ProfileActions) {

    let index;
    switch (action.type) {
        case ProfileActionTypes.SET_ACTIVE_PROFILE:
            return {
                ...state,
                activeProfile: action.payload.profile
            };
        case ProfileActionTypes.SET_PROFILES:
            return {
                ...state,
                profiles: action.payload.profiles
            };
        default:
            return state;
    }

}
