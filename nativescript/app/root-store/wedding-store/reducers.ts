import { WeddingActions, WeddingActionTypes } from './actions';
import { initialState } from './state';

export function reducer(state = initialState, action: WeddingActions) {

	switch (action.type) {
		case WeddingActionTypes.GET_WEDDINGS_SUCCESS:
			return Object.assign({}, state, {
				weddings: action.payload.weddings
			});

		case WeddingActionTypes.SET_ACTIVE_WEDDING_SUCCESS:
			return Object.assign({}, state, {
				activeWedding: action.payload.wedding
			});

		case WeddingActionTypes.GET_WEDDING_MEMBERS_SUCCESS:
			return Object.assign({}, state, {
				activeWeddingMembers: action.payload.weddingMembers
			});

		case WeddingActionTypes.UPDATE_WEDDING:
			return Object.assign({}, state, {
				ui: Object.assign({}, state.ui, {
					weddingForm: Object.assign({}, state.ui.weddingForm, {
						submitted: true
					})
				})
			});

		case WeddingActionTypes.UPDATE_WEDDING_SUCCESS:
			return Object.assign({}, state, {
				activeWedding: Object.assign({}, state.activeWedding, {
					name: action.payload.wedding.name
				}),
				ui: Object.assign({}, state.ui, {
					weddingForm: Object.assign({}, state.ui.weddingForm, {
						submitted: false
					})
				})
			});

		case WeddingActionTypes.UPDATE_WEDDING_FAILURE:
			return Object.assign({}, state, {
				ui: Object.assign({}, state.ui, {
					weddingForm: Object.assign({}, state.ui.weddingForm, {
						submitted: false
					})
				})
			});

		default:
			return state;
	}

}
