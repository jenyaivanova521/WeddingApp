import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../../shared/shared.module';

import { routing } from './auth.routing';

@NgModule({
    imports: [
        routing,
        CommonModule,
        SharedModule
    ],
    declarations: [
    ],
    providers: [
    ]
})
export class AuthModule { }
