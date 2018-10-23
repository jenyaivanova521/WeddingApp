import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AuthInfo } from './models';
import { State } from './state';

const getAuthInfo = (state: State): any => state.authInfo;

export const selectAuthState: MemoizedSelector<object,State> = createFeatureSelector<State>('auth');
export const selectAuthInfo: MemoizedSelector<object,AuthInfo> = createSelector(selectAuthState, getAuthInfo);
