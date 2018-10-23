import { Member } from './models';

export interface State {
    members: Member[];
}

export const initialState: State = {
    members: []
};
