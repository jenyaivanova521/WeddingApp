import { Action } from '@ngrx/store';
import { Wedding, Member } from './models';

export enum WeddingActionTypes {
	GET_WEDDINGS = '[WEDDING] Get weddings',
	GET_WEDDINGS_SUCCESS = '[WEDDING] Get weddings success',
	GET_WEDDINGS_ERROR = '[WEDDING] Get weddings error',
	SET_ACTIVE_WEDDING = '[WEDDING] Set active wedding',
	SET_ACTIVE_WEDDING_SUCCESS = '[WEDDING] Set active wedding success',
	SET_ACTIVE_WEDDING_FAILURE = '[WEDDING] Set active wedding failure',
	CREATE_WEDDING = '[WEDDING] Create wedding',
	CREATE_WEDDING_SUCCESS = '[WEDDING] Create wedding success',
	CREATE_WEDDING_FAILURE = '[WEDDING] Create wedding failure',
	GET_WEDDING_MEMBERS = '[WEDDING] Get wedding members',
	GET_WEDDING_MEMBERS_SUCCESS = '[WEDDING] Get wedding members success',
	UPDATE_WEDDING = '[WEDDING] Update wedding',
	UPDATE_WEDDING_SUCCESS = '[WEDDING] Update wedding success',
	UPDATE_WEDDING_FAILURE = '[WEDDING] Update wedding failure'
}

export class GetWeddings implements Action {
	readonly type = WeddingActionTypes.GET_WEDDINGS;
}

export class GetWeddingsSuccess implements Action {
	readonly type = WeddingActionTypes.GET_WEDDINGS_SUCCESS;

	constructor(public payload: {
		weddings: Wedding[]
	}) { }
}

export class GetWeddingsError implements  Action {
	readonly type = WeddingActionTypes.GET_WEDDINGS_ERROR;
}

export class GetWeddingMembers implements Action {
	readonly type = WeddingActionTypes.GET_WEDDING_MEMBERS;
}

export class GetWeddingMembersSuccess implements Action {
	readonly type = WeddingActionTypes.GET_WEDDING_MEMBERS_SUCCESS;

	constructor(public payload: {
		weddingMembers: Member[]
	}) { }
}

export class SetActiveWedding implements Action {
	readonly type = WeddingActionTypes.SET_ACTIVE_WEDDING;

	constructor(public payload?: {
		id: string
	}) { }
}

export class SetActiveWeddingSuccess implements Action {
	readonly type = WeddingActionTypes.SET_ACTIVE_WEDDING_SUCCESS;

	constructor(public payload: {
		wedding: Wedding
	}) { }
}

export class SetActiveWeddingFailure implements Action {
	readonly type = WeddingActionTypes.SET_ACTIVE_WEDDING_FAILURE;
}

export class CreateWedding implements Action {
	readonly type = WeddingActionTypes.CREATE_WEDDING;

	constructor(public payload: Wedding) { }
}

export class CreateWeddingSuccess implements Action {
	readonly type = WeddingActionTypes.CREATE_WEDDING_SUCCESS;
}

export class CreateWeddingFailure implements Action {
	readonly type = WeddingActionTypes.CREATE_WEDDING_FAILURE;

	constructor(public payload: any) { }
}

export class UpdateWedding implements Action {
	readonly type = WeddingActionTypes.UPDATE_WEDDING;

	constructor(public payload: {
		wedding: any
	}) { }
}

export class UpdateWeddingSuccess implements Action {
	readonly type = WeddingActionTypes.UPDATE_WEDDING_SUCCESS;
	constructor(public payload: {
		wedding: any
	}) { }
}

export class UpdateWeddingFailure implements Action {
	readonly type = WeddingActionTypes.UPDATE_WEDDING_FAILURE;
	constructor(public payload: {
		error: any
	}) { }
}

export type WeddingActions = GetWeddings
	| GetWeddingsSuccess
	| SetActiveWedding
	| SetActiveWeddingSuccess
	| SetActiveWeddingFailure
	| CreateWedding
	| CreateWeddingSuccess
	| CreateWeddingFailure
	| GetWeddingMembers
	| GetWeddingMembersSuccess
	| UpdateWedding
	| UpdateWeddingSuccess
	| UpdateWeddingFailure;
