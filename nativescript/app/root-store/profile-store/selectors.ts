import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { Profile } from '../common-models';
import { State } from './state';

const getActiveProfile = (state: State): any => state.activeProfile;
const getProfiles = (state: State): any => state.profiles;

export const selectProfileState: MemoizedSelector<object, State> = createFeatureSelector<State>('profile');
export const selectActiveProfile: MemoizedSelector<object, Profile | null> = createSelector(selectProfileState, getActiveProfile);
export const selectProfiles: MemoizedSelector<object, Profile | null> = createSelector(selectProfileState, getProfiles);
