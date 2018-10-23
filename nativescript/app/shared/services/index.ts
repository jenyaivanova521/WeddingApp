import { PostService } from '~/shared/services/post.service';
import { AuthService } from './auth.service';
import { DialogsService } from './dialogs.service';
import { TaskService } from './task.service';
import { WeddingService } from './wedding.service';
import { ModalService } from './modal.service';
import { GuestService } from '~/shared/services/guest.service';

export {
	AuthService,
	DialogsService,
	ModalService,
	PostService,
	TaskService,
	WeddingService,
	GuestService,
}

export const appServices = [
	AuthService,
	DialogsService,
	ModalService,
	PostService,
	TaskService,
	WeddingService,
	GuestService,
];