import { Actions, AuthActionTypes } from './actions';
import { initialState } from './state';

export function reducer(state = initialState, action: Actions) {

    switch (action.type) {
        case AuthActionTypes.GET_AUTH_INFO_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                authInfo: {
                    ...action.payload
                }
            };

        default:
            return state;
    }

}
