export interface Task {
	id: string;
	name: string;
	status: string;
	overdue: boolean;
	dueDate: string | null;
	assignedMemberId: string | null;
}

export interface TaskDetails {
	id: string;
	name: string;
	status: string;
	dueDate: string | null;
	doneAt: string | null;
	createdAt: string;
	isAssigned: boolean;
	author: {
		id: string;
		email: string;
		account: {
			id: string;
			firstName: string;
			lastName: string;
			email: string;
		}
	},
	assigned: {
		id: string;
		email: string;
		account: {
			id: string;
			firstName: string;
			lastName: string;
			email: string;
		}
	} | null
}
