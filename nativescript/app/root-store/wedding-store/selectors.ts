import {
	createFeatureSelector,
	createSelector,
	MemoizedSelector
} from '@ngrx/store';

import { Wedding, Member } from './models';
import { State } from './state';

const getWeddings = (state: State): any => state.weddings;
const getActiveWedding = (state: State): any => state.activeWedding;
const getActiveWeddingMembers = (state: State): any => state.activeWeddingMembers;
const getWeddingForm = (state: State): any => state.ui.weddingForm;
const getMemberForm = (state: State): any => state.ui.memberForm;
const getMemberRoleForm = (state: State): any => state.ui.memberRoleForm;

export const selectWeddingState: MemoizedSelector<object, State> = createFeatureSelector<State>('wedding');
export const selectWeddings: MemoizedSelector<object, Wedding[]> = createSelector(selectWeddingState, getWeddings);
export const selectActiveWedding: MemoizedSelector<object, Wedding | null> = createSelector(selectWeddingState, getActiveWedding);
export const selectActiveWeddingMembers: MemoizedSelector<object, Member[] | null> = createSelector(selectWeddingState, getActiveWeddingMembers);
export const hasWedding: MemoizedSelector<object, any> = createSelector(selectWeddingState, (state) => {
	return state.weddings && state.weddings.length > 0;
});
export const selectWeddingForm: MemoizedSelector<object, any> = createSelector(selectWeddingState, getWeddingForm);
export const selectMemberForm: MemoizedSelector<object, any> = createSelector(selectWeddingState, getMemberForm);
export const selectMemberRoleForm: MemoizedSelector<object, any> = createSelector(selectWeddingState, getMemberRoleForm);