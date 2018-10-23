import { Wedding, Member } from './models';

export interface State {
	weddings: Wedding[] | null;
	activeWedding: Wedding | null;
	activeWeddingMembers: Member[] | null;
	ui: {
		weddingForm: {
			submitted: boolean
		},
		memberForm: {
			submitted: boolean,
			modalOpen: boolean,
			error: any | null
		},
		memberRoleForm: {
			submitted: boolean,
			modalOpen: boolean,
			error: any | null
		}
	}
}

export const initialState: State = {
	weddings: null,
	activeWedding: null,
	activeWeddingMembers: null,
	ui: {
		weddingForm: {
			submitted: false
		},
		memberForm: {
			submitted: false,
			modalOpen: false,
			error: null
		},
		memberRoleForm: {
			submitted: false,
			modalOpen: false,
			error: null
		}
	}
};
