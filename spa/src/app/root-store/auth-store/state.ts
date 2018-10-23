import { AuthInfo } from './models';

export interface State {
    isAuthenticated: boolean;
    authInfo: AuthInfo | null;
}

export const initialState: State = {
    isAuthenticated: false,
    authInfo: null
};
