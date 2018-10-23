import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routing: ModuleWithProviders = RouterModule.forRoot([{
    path: '**',
    redirectTo: ''
}], {
    useHash: false,
    onSameUrlNavigation: 'reload'
});
