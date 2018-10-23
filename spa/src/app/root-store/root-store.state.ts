import { AuthState } from './auth-store';
import { MemberState } from './member-store';
import { TaskState } from './task-store';
import { ProfileState } from './profile-store';
import { MessageState } from './message-store';

export interface State {
    auth: AuthState.State;
    member: MemberState.State;
    task: TaskState.State;
    profile: ProfileState.State;
    message: MessageState.State;
}
