import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { API_URL } from '~/shared/configs';
import { State, Task, TaskDetails } from '../../root-store';

@Injectable()
export class TaskService {

	private apiUrl: string = `${API_URL}/weddings`;

	constructor(
		private store: Store<State>,
		private http: HttpClient
	) { }

	public getTasks({ weddingId }): Observable<any> {
		return this.http.get(`${this.apiUrl}/${weddingId}/tasks`);
	}

	public getTask({ weddingId, taskId }): Observable<any> {
		return this.http.get<TaskDetails>(`${this.apiUrl}/${weddingId}/tasks/${taskId}`);
	}

	public setTaskStatus({ weddingId, taskId, status }): Observable<any> {
		return this.http.patch(`${this.apiUrl}/${weddingId}/tasks/${taskId}`, {
			status
		});
	}

	public addTask({ weddingId, task }): Observable<any> {
		return this.http.post(`${this.apiUrl}/${weddingId}/tasks`, {
			name: task.name,
			assignedMemberId: task.assignedMemberId,
			dueDate: task.dueDate
		});
	}

	public deleteTask({ weddingId, taskId }): Observable<any> {
		return this.http.delete(`${this.apiUrl}/${weddingId}/tasks/${taskId}`);
	}

	public editTask({ weddingId, task }): Observable<any> {
		return this.http.patch(`${this.apiUrl}/${weddingId}/tasks/${task.id}`, {
			name: task.name,
			dueDate: task.dueDate,
			assignedMemberId: task.assignedMemberId
		});
	}

	public getTaskStats({ weddingId }): Observable<any> {
		return this.http.get<Task[]>(`${this.apiUrl}/${weddingId}/tasks/stats`);
	}

}
