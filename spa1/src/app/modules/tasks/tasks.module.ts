import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { SharedModule } from '../../shared/shared.module';
import { TasksComponent } from './tasks.component';
import { routing } from './tasks.routing';
import { LayoutModule } from '../../core/layout/layout.module';
import { MatIconModule } from '@angular/material';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskFormModalComponent } from './components/task-form-modal/task-form-modal.component';
import { TaskStatsComponent } from './components/task-stats/task-stats.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule.forRoot(),
        routing,
        LayoutModule,
        MatIconModule,
        FormsModule,
        NgSelectModule,
        TextareaAutosizeModule,
        SharedModule,
    ],
    declarations: [
        TasksComponent,
        TaskDetailsComponent,
        TaskStatsComponent,
        TaskFormModalComponent
    ],
    exports: [
        TasksComponent
    ],
    entryComponents: [
        TaskFormModalComponent
    ]
})
export class TasksModule { }
