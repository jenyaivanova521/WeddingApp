import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	TaskComponent,
	TasksListComponent
} from '~/modules/tasks/components';
import { CreateTaskModal } from '~/modules/tasks/modals';

import { SharedModule } from '../shared.module';

@NgModule({
	declarations: [
		TasksListComponent,
		TaskComponent,
		CreateTaskModal,
	],
	entryComponents: [
		CreateTaskModal,
	],
	imports: [
		CommonModule,
		SharedModule,
	],
	exports: [
	]
})
export class TasksModule { }