import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Member } from './models';

export enum MemberActionTypes {
    SET_MEMBERS = '[MEMBER] Set members',
    CHANGE_MEMBER_ROLE = '[MEMBER] Change member role',
    DELETE_MEMBER = '[MEMBER] Delete member'
}

export class SetMembers implements Action {
    readonly type = MemberActionTypes.SET_MEMBERS;

    constructor(public payload: {
        members: Member[]
    }) { }
}

export class ChangeMemberRole implements Action {
    readonly type = MemberActionTypes.CHANGE_MEMBER_ROLE;
    constructor(public payload: {
        memberId: string,
        role: string
    }) { }
}

export class DeleteMember implements Action {
    readonly type = MemberActionTypes.DELETE_MEMBER;
    constructor(public payload: {
        memberId: string
    }) { }
}

export type MemberActions =
    | SetMembers
    | ChangeMemberRole
    | DeleteMember
