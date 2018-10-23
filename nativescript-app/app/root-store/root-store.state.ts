import { AuthState } from './auth-store';
import { TaskState } from './task-store';
import { WeddingState } from './wedding-store';
import { MemberState } from '~/root-store/member-store';
import { ProfileState } from '~/root-store/profile-store';
import { MessageState } from '~/root-store/message-store';

export interface State {
	auth: AuthState.State;
	task: TaskState.State;
	wedding: WeddingState.State;
	member: MemberState.State;
	profile: ProfileState.State;
	message: MessageState.State;
}
