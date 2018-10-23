import { Action } from '@ngrx/store';
import { AuthInfo } from './models';

export enum AuthActionTypes {
	GET_AUTH_INFO = '[AUTH] Get auth info',
	LOGOUT = '[AUTH] Logout',
	LOGOUT_SUCCESS = '[AUTH] Logout success',
	LOGOUT_FAILURE = '[AUTH] Logout failure',
	GET_AUTH_INFO_SUCCESS = '[AUTH] Get auth info success',
	GET_AUTH_INFO_FAILURE = '[AUTH] Get auth info failure',
	LOGIN = '[AUTH] Login',
}

export class Login implements Action {
	readonly type = AuthActionTypes.LOGIN;
}

export class GetAuthInfo implements Action {
	readonly type = AuthActionTypes.GET_AUTH_INFO;
}

export class Logout implements Action {
	readonly type = AuthActionTypes.LOGOUT;
}

export class LogoutSuccess implements Action {
	readonly type = AuthActionTypes.LOGOUT_SUCCESS;
}

export class LogoutFailure implements Action {
	readonly type = AuthActionTypes.LOGOUT_FAILURE;
}

export class GetAuthInfoSuccess implements Action {
	readonly type = AuthActionTypes.GET_AUTH_INFO_SUCCESS;

	constructor(public payload: AuthInfo) { }
}

export class GetAuthInfoFailure implements Action {
	readonly type = AuthActionTypes.GET_AUTH_INFO_FAILURE;

	constructor(public payload: any) { }
}

export type AuthActions = GetAuthInfo
	| Login
	| Logout
	| LogoutSuccess
	| LogoutFailure
	| GetAuthInfoSuccess
	| GetAuthInfoFailure;
