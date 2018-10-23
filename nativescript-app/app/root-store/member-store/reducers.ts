import { Action } from '@ngrx/store';
import { MemberActions, MemberActionTypes } from './actions';
import { initialState, State } from './state';

export function reducer(state = initialState, action: MemberActions) {

    let index;
    switch (action.type) {
        case MemberActionTypes.SET_MEMBERS:
            return {
                ...state,
                members: action.payload.members
            };
        case MemberActionTypes.CHANGE_MEMBER_ROLE:
            let updatedMembers = state.members.map((item, index) => {
                if (item.id !== action.payload.memberId) {
                    return item;
                }
                return {
                    ...item,
                    role: action.payload.role
                };
            });
            return {
                ...state,
                members: updatedMembers
            };
        case MemberActionTypes.DELETE_MEMBER:
            updatedMembers = state.members.filter((member) => {
                return member.id !== action.payload.memberId;
            })
            return {
                ...state,
                members: updatedMembers
            };
        default:
            return state;
    }

}
