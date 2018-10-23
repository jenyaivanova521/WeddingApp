import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthStoreModule } from './auth-store';
import { MemberStoreModule } from './member-store';
import { TaskStoreModule } from './task-store';
import { ProfileStoreModule } from './profile-store';
import { MessageStoreModule } from './message-store';

@NgModule({
    imports: [
        CommonModule,
        AuthStoreModule,
        MemberStoreModule,
        TaskStoreModule,
        ProfileStoreModule,
        MessageStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
    ],
    declarations: []
})
export class RootStoreModule { }
