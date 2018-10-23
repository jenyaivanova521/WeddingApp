import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { Member } from './models';
import { State } from './state';

const getMembers = (state: State): any => state.members;

export const selectMemberState: MemoizedSelector<object, State> = createFeatureSelector<State>('member');
export const selectMembers: MemoizedSelector<object, Member[] | null> = createSelector(selectMemberState, getMembers);
