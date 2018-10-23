import { Profile } from '../common-models';

export interface State {
    activeProfile: Profile | null | boolean;
    profiles: Profile[]
}

export const initialState: State = {
    activeProfile: null,
    profiles: []
};
