import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './effects';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TaskService } from '../services/task.service';
import { reducer } from './reducers';

import { StoreModule } from '@ngrx/store';

import { ConfirmDialogModule } from "../../shared/confirm-dialog/confirm-dialog.module";
import { TruncatePipe } from "../../shared/pipes/truncate";

@NgModule({
    imports: [
        StoreModule.forFeature('task', reducer),
        EffectsModule.forFeature([TaskEffects]),
        NgbModule.forRoot(),
        ConfirmDialogModule
    ],
    declarations: [
        TruncatePipe
    ],
    providers: [
        TaskService,
        TaskEffects
    ]
})
export class TaskStoreModule { }
