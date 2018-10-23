import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Task, TaskDetails } from '../task-store/models';
import { State } from '../root-store.state';

@Injectable()
export class TaskService {
    private apiUrl: string = environment.apiUrl + '/weddings';

    constructor(
        private store: Store<State>,
        private http: HttpClient
    ) { }

    getTasks({ weddingId, options }): Observable<any> {
        let params = '';
        Object.keys(options).map((key, i) => {
            let value = options[key];
            if(value) {
                params += `${params.length == 0 ? '/?' : '&'}${key}=${value}`;
            }
        });
        return this.http.get<Task[]>(this.apiUrl + '/' + weddingId + '/tasks' + params);
    }

    getTask({ weddingId, taskId }): Observable<any> {
        return this.http.get<TaskDetails>(this.apiUrl + '/' + weddingId + '/tasks/' + taskId);
    }

    addTask({ weddingId, task }): Observable<any> {
        return this.http.post(this.apiUrl + '/' + weddingId + '/tasks', {
            name: task.name,
            assignedMemberId: task.assignedMemberId,
            dueDate: task.dueDate
        });
    }

    deleteTask({ weddingId, taskId }): Observable<any> {
        return this.http.delete(this.apiUrl + '/' + weddingId + '/tasks/' + taskId);
    }

    changeTaskStatus({ weddingId, taskId, status }): Observable<any> {
        return this.http.patch(this.apiUrl + '/' + weddingId + '/tasks/' + taskId, {
            status: status
        });
    }

    editTask({ weddingId, task }): Observable<any> {
        return this.http.patch(this.apiUrl + '/' + weddingId + '/tasks/' + task.id, {
            name: task.name,
            dueDate: task.dueDate,
            assignedMemberId: task.assignedMemberId
        });
    }

    getTaskStats({ weddingId }): Observable<any> {
        return this.http.get<Task[]>(this.apiUrl + '/' + weddingId + '/tasks/stats');
    }

}
