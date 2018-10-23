import { AuthActions, AuthActionTypes } from './actions';
import { initialState } from './state';

export function reducer(state = initialState, action: AuthActions) {

	switch (action.type) {
		case AuthActionTypes.GET_AUTH_INFO_SUCCESS:
			return Object.assign({}, state, {
				isAuthenticated: true,
				authInfo: Object.assign({}, state.authInfo, {
					account: action.payload.account
				})
			});
		case AuthActionTypes.LOGOUT: {
			return initialState;
		}
		default:
			return state;
	}

}
